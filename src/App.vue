<template>
  <div>
    <Header/>
  </div>
  <router-view/>
</template>
<script>
import Header from './components/Header/Header.vue';
import {RouterView} from 'vue-router';

export default {
    components: { Header }
}
</script>
<style >
  
</style>