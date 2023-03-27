<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const employeeslist = computed(() => store.state.employees);
    return {
      employeeslist,
    };
  },
};
</script>

<template>
  <section id="left">
    <div class="logo">
      <p><img src="@/assets/_logo/the-godfather.svg" alt="Logo" /></p>
    </div>
    <nav>
      <ul>
        <li v-for="(item, key) in employeeslist" :key="key" @click="details">
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped lang="scss">
#left {
  position: fixed;
  width: 20%;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  top: 0;
  z-index: 4;
  .logo {
    width: 50%;
    margin: 0 auto;
    height: 30vh;
    display: flex;
    align-items: center;
  }
  nav {
    margin-top: 30px;
    ul {
      padding: 0;
      margin: 0;
      li {
        text-align: center;
        list-style: none;
        color: #3db5d7;
        font-size: 35px;
        padding: 5px 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
        &:nth-child(2) {
          font-size: 18px;
        }
        &:nth-child(3) {
          color: #fff;
          font-size: 18px;
        }
        &:nth-child(4) {
          font-size: 22px;
        }
      }
    }
  }
}
</style>
