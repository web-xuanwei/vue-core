import lookup from "./lookup";
import renderTemplate from "./renderTemplate";
/**
 * 
 * @param {*} token ['#', 'students', []]
 * @param {*} data 
 */
export default function parseArray(token, data){
  var v = lookup(data, token[1]);
  var str = "";
  for(let i = 0; i < v.length; i++){
    str += renderTemplate(token[2], v[i])
  }
  return str;
}