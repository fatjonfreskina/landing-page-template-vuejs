<script>
import Carosello from "../components/Carosello.vue";
import Divider from "../components/Divider.vue";
import Gallery from "../components/Gallery.vue";
export default {
  components: {
    Carosello,
    Divider,
    Gallery,
  },

  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      companyName: "Company Name",
      companyQuote: "Company Quote Here ...",
    };
  },
  mounted() {
    console.log("Home view mounted.");
  },
  methods: {
    // Add your methods here
  },
  computed: {
    // Add your computed properties here
  },
  watch: {
    // Add your watch properties here
  },
  filters: {
    // Add your filters here
  },
};
</script>

<template>
  <Carosello />
  <Gallery />
</template>

<style scoped>

</style>
