import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'
import modal from '../components/modal';

Vue.use(VueSession)
Vue.use(VueAxios, axios)

export default {
  name: 'Home',
  components: {
    modal
  },
  props: {
    data: String
  },
  data() {
    return {
      listItem: "",
      isModalVisible: false,
    }
  },
  beforeCreate() {
    //securité
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
    //récupération des données via l'api
    this.axios.get("https://post-api-platform.herokuapp.com/api/posts?page=1", {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.token
      }
    }).then(res => {
      this.listItem = res.data["hydra:member"]
    })
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$session.destroy()
      this.$router.push('Login')
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    patchData(item) {
      let recupTitle = document.getElementsByClassName("inputTitle")[item.id - 1]
      let recupBody = document.getElementsByClassName("txtBody")[item.id - 1]
      this.axios.patch("https://post-api-platform.herokuapp.com/api/posts/"+ item.id, {
        'title': recupTitle.value,
        'body': recupBody.value
      }, 
      {
        headers: {
          'Content-Type': 'application/merge-patch+json',
          'Authorization': 'Bearer ' + localStorage.token
        }
      }).then(result => {
        if(result.statusText === "OK"){
        console.log("enregistrement effectué")
        }
        else {
          alert(result.message)
        }
      })
    },
    supprimer(item) {
      let confirmation = confirm("Etes vous sur de vouloir supprimer l'article : " + item.title + " ?") 
      if (confirmation == true){
      
      this.axios.delete("https://post-api-platform.herokuapp.com/api/posts/"+ item.id, {
        headers: {
          'Content-Type': 'application/merge-patch+json',
          'Authorization': 'Bearer ' + localStorage.token
        }
      }).then(
        console.log("article supprimer"),
        location.reload()
      )
    }
  }
  }
}