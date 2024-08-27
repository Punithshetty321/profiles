<script>
import loadingPage from "../src/components/Loading.vue";
export default {
  components: {
    loadingPage,
  },
};
</script>

<template>
  <loadingPage />
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700&display=swap");

#app {
  font-family: "Mulish", sans-serif, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>