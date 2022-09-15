import h from "./mysnabbdom/h.js"

console.log(h("div", {}, "大铁牛"))
console.log(h("div", {}, [h("div", {}, "大铁牛"), h("div", {}, "大铁牛")]));
console.log(h("div", {}, h("div", {}, "大铁牛")));