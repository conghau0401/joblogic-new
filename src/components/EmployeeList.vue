<script setup>
  import { defineEmits, defineProps } from "vue";
  const props = defineProps(
    {
      employees: Object,
      index: Number
    }
  );
  const emit = defineEmits(['chooseNavigation']);
</script>

<template>
  <section id="left">{{props.index}}
    <div class="logo">
      <p><img src="@/assets/_logo/the-godfather.svg" alt="Logo" /></p>
    </div>
    <nav>
      <ul>
        <li
          v-for="(item, key) in props.employees"
          :key="key"
          :style="{ fontSize: +item.popularity * 40 + '%' }"
          @click="emit('chooseNavigation', key)"
          :class="{ active: key == props.index }">
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
        padding: 10px 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
        &.active {
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
}
@media (max-width: 991px) {
  #left {
    position: relative;
    width: 100%;
    height: auto;
    top: auto;
    background: #000;
    .logo {
      width: 12%;
      margin: 0 auto;
      height: auto;
      display: inherit;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
    nav {
      margin: 0;
      padding: 3vw 0;
    }
  }
}
</style>
