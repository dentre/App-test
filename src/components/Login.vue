<script src="../componentsControl/Login.js"></script>

<template id="login">
  <div class="container">
    <div class="header">
      <img alt="Vue logo" src="../assets/guidap.png">
      <h1>LOGIN</h1>
    </div>
    <div class="firstblock">
      <h3>Identifiant</h3>
      <input class="inputTitle" id="ident" type="text"/>
    </div>
    <div class="secondblock">
      <h3>Mot de passe</h3>
      <input class="inputTitle" id="mdp" type="password"/>
    </div>
    <div class="thirdblock">
      <button v-on:click="loginGuidap" class="btn-green">Se connecter</button>
    </div>
  </div>
</template>




