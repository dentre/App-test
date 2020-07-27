<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    },
    enregistrement() {
        let recupNewTitle = document.getElementById("newArticleTitle")
        let recupNewBody = document.getElementById("newArticleBody")
      this.axios.post("https://post-api-platform.herokuapp.com/api/posts",{
            title: recupNewTitle.value,
            body: recupNewBody.value
          },
          {
            headers: {
              "Content-Type": "application/ld+json",
              Authorization: "Bearer " + localStorage.token
            }
        }).then(
            console.log("enregistrement effectué"),
            this.close(),
            location.reload()
        );
    }
  }
};
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Ajouter un article
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >x</button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <label>Titre</label>
            <input id="newArticleTitle" />
            <label>Article</label>
            <textarea id="newArticleBody"></textarea>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="enregistrement"
              aria-label="Close modal"
            >Enregistrer</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
