// import $ from "jquery"

export default {
  sayH1() {
    document.body.insertAdjacentHTML(
      "beforeend",
      "<h1>Hello Webpack world~!</h1>"
    );
    // $("body").append("<h1>Hello Webpack world~!</h1>")
  },
  a: 10,
  b: 20,
};
