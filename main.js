const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 1, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.inStock ? (this.cart += 1) : null;
    },
    updateImage(image) {
      this.image = image;
    },
  },
});
