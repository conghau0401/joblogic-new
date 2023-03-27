const mutations = {
    EMPLOYEES(state, response) {
        state.employees = response
    },
    updateEmployee(state, popularity) {
        console.log(popularity);
    },

}

export default mutations
