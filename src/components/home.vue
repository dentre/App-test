<script src="../componentsControl/home.js"></script>

<template id="home">
  <div class="wrapper">
    <div class="headerBody">
        <img alt="Vue logo" src="../assets/guidap.png">
        <button @click="logout" class="btn-close logout">Se déconnecter</button>
    </div>
    <div>
        <div class="titleBody">
            <h1>Articles</h1>            
        </div>
        <button @click="showModal" class="btn-green"> <i class="fas fa-plus-circle" style="font-size: 20px;"></i>&nbsp;&nbsp;Ajouter un article</button>
        <div class="articles" v-for="item in listItem" :key="item.id">
            <div class="article">
                <i class="far fa-trash-alt supp" style="font-size: 20px;" @click="supprimer(item)"></i>
                <div>
                    <input class="inputTitle" v-model="item.title"/>
                </div>
                <div>
                    <textarea class="txtBody" v-html="item.body"></textarea>
                </div>
                <div class="save">
                    <button @click="patchData(item)" class="btn-green">Sauvegarder les modifications</button>
                </div>
                
            </div>
        </div>
    </div>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>
