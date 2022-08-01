app.component("product-display", {
  template: `<div class="product-container">
      <div class="product-image">
        <img :src="image" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
          <p v-if="inStock">In stock</p>
          <p v-else>Out of stock</p>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            class="color-circle"
            :style="{backgroundColor: variant.color}"
            @mouseover="updateSelected(index)"
          ></div>
          <button
            class="button"
            :disabled="!inStock"
            :class="{disabledButton: !inStock}"
            @click="addToCart()"
          >
            Add to Cart
          </button>
        </div>
      </div>`,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 1,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      if (this.variants[this.selectedVariant].quantity > 0) {
        this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
      }
    },
    updateSelected(sock) {
      this.selectedVariant = sock;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0;
    },
  },
});
