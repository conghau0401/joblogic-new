const mutations = {
    EMPLOYEES(state, response) {
        state.employees = response
    },
    updateEmployee(state, data) {
        state.employees.map((item) => {
            if (item.name == data.name) {``
                item.popularity = data.popularity
            }
        })
    },
}

export default mutations
