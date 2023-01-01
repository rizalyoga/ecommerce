import { createStore } from "vuex";

export default createStore({
  state: {
    index: 0,
    dataProduct: {},
  },
  mutations: {
    PLUS_INDEX(state) {
      state.index += 1;
    },
  },
  actions: {
    PLUS_INDEX(newIndex) {
      newIndex.commit("PLUS_INDEX");
    },
  },
});
