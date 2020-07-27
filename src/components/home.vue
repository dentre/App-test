<script src="../componentsControl/home.js"></script>

<template id="home">
  <div class="container">
    <div class="header">
        <img alt="Vue logo" src="../assets/guidap.png">
        <button @click="logout">Se déconnecter</button>
    </div>
    <div class="container">
        <div>
            <h2>Articles</h2>
            <button @click="showModal" class="btn-green">Ajouter un article</button>
        </div>
        <div class="articles" v-for="item in listItem" :key="item.id">
            <div class="article">
                <input class="inputTitle" v-model="item.title"/>
                <textarea class="txtBody" v-html="item.body"></textarea>
                <button @click="patchData(item)" class="btn-green">Sauvegarder les modifications</button>
                <button @click="supprimer(item.id)" >Supprimer l'article</button>
            </div>
        </div>
    </div>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>
