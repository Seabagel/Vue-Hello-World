console.log("Hello Vue");

const app = Vue.createApp({
  //  template: "<h2>I'm a template</h2>"
  data() {
    return {
      show: true,
      messages: [
        { message: "I have diahrrea", author: "Pudding" },
        { message: "Real trap shit", author: "YoungJelly" },
      ],
    };
  },
  methods: {
    changeMessage(message) {
      this.messages[0].message = message;
    },
    toggleShow() {
      this.show = !this.show;
    },
  },
});

app.mount("#app");
