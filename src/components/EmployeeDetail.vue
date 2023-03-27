<script>
import { ref } from 'vue'
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const employeeslist = computed(() => store.state.employees);
    const popularity = ref(employeeslist.value[0].popularity);
    const updatePopularity = function() {
      store.commit("updateEmployee", popularity.value)
    }
    return {
      employeeslist,
      updatePopularity,
      popularity
    }
  }
};
</script>

<template>
  <section id="detail">
    <div class="employee">
      <div class="img-employee">
        <p>
          <img src="@/assets/_images/profile/VitoCorleone.jpg" alt="image" />
        </p>
      </div>
      <div class="wrapper-info">
        <h3 class="name-employee">
          {{ employeeslist[0].name }}
        </h3>
        <div class="popularity">
          <p class="title">Popularity</p>
          <p class="ruler"></p>
          <input type="range" id="popularity" name="popularity" v-model="popularity" min="1" max="15" @change="updatePopularity">
        </div>
        <div class="content">
          <div class="colleagues">
            <span v-for="(item, key) in employeeslist[0].colleagues" :key="key">
              {{ item }}
            </span>
          </div>
          {{ employeeslist[0].biography }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#detail {
  padding-left: 25%;
  background: #2e2e36;
  position: fixed;
  top: 30vh;
  left: 0;
  height: 100%;
  z-index: 3;
  .employee {
    display: flex;
    justify-content: flex-start;
    margin-top: -50px;
    .img-employee {
      width: 160px;
      margin-right: 50px;
      p {
        margin: 0;
        img {
          border-radius: 5px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.75);
        }
      }
    }
    .wrapper-info {
      width: calc(100% - 300px);
      text-align: left;
      .name-employee {
        color: #fff;
        font-size: 30px;
        margin: 0;
        margin-bottom: 20px;
      }
      .popularity {
        color: #fff;
        font-size: 16px;
        display: flex;
        align-items: center;
        .title {
          width: 10%;
        }
        input#popularity {
          height: 5px;
          background: #1a1d24;
          width: 90%;
          position: relative;
          margin: 0;
          cursor: pointer;
        }
      }
      .content {
        background: #1a1d24;
        padding: 30px;
        color: #fff;
        margin-top: 50px;
        line-height: 25px;
        border-radius: 5px;
        .colleagues {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
          span {
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
