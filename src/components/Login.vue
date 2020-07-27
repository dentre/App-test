<script src="../componentsControl/Login.js"></script>

<template id="login">
  <div class="container">
    <div class="header">
      <img alt="Vue logo" src="../assets/guidap.png">
      <h1>LOGIN</h1>
    </div>
    <div class="firstblock">
      <h2>Identifiant</h2>
      <input id="ident"/>
    </div>
    <div class="secondblock">
      <h2>Mot de passe</h2>
      <input id="mdp" type="password"/>
    </div>
    <div class="thirdblock">
      <button v-on:click="loginGuidap">Se connecter</button>
    </div>
  </div>
</template>




