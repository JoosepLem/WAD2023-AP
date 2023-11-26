<template>
  <Header/>
  <router-view></router-view>
  <Footer/>
</template>

<style>

</style>


<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  }
}
</script>