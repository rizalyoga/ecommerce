import { createStore } from "vuex";

export default createStore({
  state: {
    index: 1,
    dataProduct: {},
  },
  mutations: {
    SET_NEW_INDEX(state) {
      if (state.index == 20) {
        state.index = 1;
      } else {
        state.index += 1;
      }
    },
    NEW_DATA_PRODUCT(state, dataProduct) {
      state.dataProduct = dataProduct;
    },
  },
  actions: {
    SET_NEW_INDEX(newIndex) {
      newIndex.commit("SET_NEW_INDEX");
    },
    NEW_DATA_PRODUCT(newDataProduct, payload) {
      newDataProduct.commit("NEW_DATA_PRODUCT", payload);
    },
  },
});
