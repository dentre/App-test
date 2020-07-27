import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'

Vue.use(VueSession) 
Vue.use(VueAxios, axios)

export default {
  name: 'Login',
  props:{
    data:String  
    },
  methods:{
    loginGuidap() {
        let ident = document.getElementById("ident").value
        let mdp = document.getElementById("mdp").value
        this.axios.post("https://post-api-platform.herokuapp.com/authentication_token", {
            username: ident,
            password: mdp
        }).then(res => {
            if(res.statusText === "OK"){
                localStorage.setItem('token', res.data.token)
                this.$session.start()
                this.$router.push('home')            
            }
            else{
                alert("Identifiant ou mot de passe incorrect")
            }
        })
    }
  }
}
