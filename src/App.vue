<template>
  <div>
    <Header/>
    <router-view/>
  </div>
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