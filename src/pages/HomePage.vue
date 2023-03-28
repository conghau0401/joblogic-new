<script>
  import { useStore } from "vuex";
  import { computed, ref } from "vue";
  import EmployeeList from "../components/EmployeeList";
  import EmployeeDetail from "../components/EmployeeDetail";
  export default {
    name: "App",
    components: {
      EmployeeList,
      EmployeeDetail,
    },
    setup() {
      const store = useStore();
      const employees = computed(() => store.state.employees);
      const index = ref(0)
      const updateKey = (key) => {
        index.value = key
      };
      const employee = computed(() => store.state.employees[index.value]);
      return {
        employees,
        updateKey,
        index,
        employee
      };
    },
  };
</script>

<template>
  <main>
    <EmployeeList :employees="employees" :index="index" @choose-navigation="updateKey" />
    <EmployeeDetail :employee="employee" />
  </main>
</template>
