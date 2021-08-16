import hello from "./hello.js";
document.getElementById("root").innerHTML = hello();
// index.js
if (module.hot) {
  module.hot.accept("./hello.js", function () {
    document.getElementById("root").innerHTML = hello();
  });
}
