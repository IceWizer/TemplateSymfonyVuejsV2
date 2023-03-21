import Vuex from 'vuex'

import authStore from './modules/authStore'

export default new Vuex.Store({
    modules: {
        authStore,
    },
})
