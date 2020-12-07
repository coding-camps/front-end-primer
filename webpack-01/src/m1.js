export default {
  sayH1() {
    document.body.insertAdjacentHTML(
      "beforeend",
      "<h1>Hello Webpack world~!</h1>"
    );
  },
};
