const app = Vue.createApp({
  data() {
    return {
      cart: 0,
    };
  },
  methods: {
    updateCart() {
      this.cart += 1;
    },
  },
});
