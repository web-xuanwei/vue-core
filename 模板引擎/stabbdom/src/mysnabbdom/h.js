import vnode from "./vnode";

/**
 * 
 * @param {*} sel 
 * @param {*} data 
 * @param {*} c 
 * 调用分三种形态：
 * 1.h("div", {}, "aaa")
 * 2.h("div", {}, [])
 * 3.h("div", {}, h())
 */
export default function h(sel, data, c){
  if(typeof c === "string" || typeof c === "number"){
    return vnode(sel, data, undefined, c, undefined)
  }else if(Array.isArray(c)){
    let child = [];
    c.forEach(item => {
      child.push(item);      
    })
    return vnode(sel, data, child, undefined, undefined)
  }else if(typeof c === "object" && c.hasOwnProperty("sel")){
    let child = [c];
    return vnode(sel, data, child, undefined, undefined)
  }
}