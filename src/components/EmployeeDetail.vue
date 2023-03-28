<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: {
    employee: Object,
  },
  setup(props) {
    const store = useStore();
    const employeeRes = computed(() => props.employee);
    const updatePopularity = function () {
      const data = {
        name: employeeRes.value.name,
        popularity: employeeRes.value.popularity,
      };
      store.commit("updateEmployee", data);
    };
    return {
      employeeRes,
      updatePopularity,
    };
  },
};
</script>

<template>
  <section id="detail">
    <div class="employee">
      <div class="img-employee">
        <p>
          <img :src="'/_images/profile/' + employeeRes.image" alt="image" />
        </p>
      </div>
      <div class="wrapper-info">
        <h3 class="name-employee">
          {{ employeeRes.name }}
        </h3>
        <div class="popularity">
          <p class="title">Popularity</p>
          <p class="ruler"></p>
          <input
            type="range"
            id="popularity"
            name="popularity"
            v-model="employeeRes.popularity"
            min="1"
            max="15"
            @change="updatePopularity"
          />
        </div>
        <div class="content">
          <div class="colleagues">
            <span v-for="(item, key) in employeeRes.colleagues" :key="key">
              {{ item }}
            </span>
          </div>
          {{ employeeRes.biography }}
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
        margin: 0 0 20px;
      }
      .popularity {
        color: #fff;
        font-size: 16px;
        display: flex;
        align-items: center;
        .title {
          width: 10%;
        }
        input[type="range"] {
          -webkit-appearance: none;
          width: 90%;
          height: 5px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 5px;
          background: #1a1d24;
          cursor: pointer;
          margin: 0;
          position: relative;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #fff;
          cursor: ew-resize;
          box-shadow: 0 0 2px 0 #555;
        }

        input[type=range]::-webkit-slider-runnable-track  {
          -webkit-appearance: none;
          box-shadow: none;
          border: none;
          background: transparent;
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

@media (max-width: 991px) {
  #detail {
    padding-left: 0;
    position: relative;
    top: auto;
    left: auto;
    height: auto;
    padding: 5vw;
    .employee {
      margin-top: 0;
      display: block;
      .img-employee {
        width: 30%;
        margin: 0 auto;
      }
      .wrapper-info {
        width: 100%;
        .name-employee {
          margin: 3vw 0;
          text-align: center;
        }
        .content {
          margin-top: 7vw;
          padding: 6vw;
        }
        .popularity {
          display: block;
          input#popularity {
            width: 100%;
          }
          .title {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
