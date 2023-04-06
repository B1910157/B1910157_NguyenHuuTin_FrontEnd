import { createStore } from "vuex";
import createPersistedState from "vuex-plugin-persistedstate";

const store = createStore({
    state() {
        return {
            Auth: false,
            // aname: "Hello"
        };
    },
    mutations: {
        setAuth(state, Auth) {
            state.Auth = Auth;
           
        },
        // setName(state, aname){
        //     state.aname = aname;
        // }
    },
    plugins: [
        createPersistedState({}),
    ],
});
// console.log("store", store);

export default store;
