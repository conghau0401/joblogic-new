<script>
    import HeaderComponent from './components/HeaderComponent'
    import { onMounted} from "vue";
    import { useStore } from 'vuex';
    export default {
      components: {
        HeaderComponent
      },
      setup() {
            const store = useStore();
            onMounted(() => {
                store.dispatch('getEmployees');
            })
        }
    }
</script>

<template>
  <HeaderComponent />
  <div id="main">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
