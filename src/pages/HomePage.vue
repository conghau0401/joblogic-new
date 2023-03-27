<template>
  <main>
    <EmployeeList />
    <EmployeeDetail />
  </main>
</template>

<script>
import EmployeeList from "../components/EmployeeList";
import EmployeeDetail from "../components/EmployeeDetail";

export default {
  name: "App",
  components: {
    EmployeeList,
    EmployeeDetail,
  },
};
</script>
