/**
 * 返回折叠的tokens
 * 启发：不断地改变中间变量的指向 妙！！！
 * @param {*} tokens 
 */
export default function nestTokens(tokens){
    var nestedTokens = []; //结果
    var collector = nestedTokens; //收集器 会变化
    var sections = []; //栈

    for(let i = 0; i < tokens.length; i++){
      let token = tokens[i];
      switch(token[0]){
        case "#":
          collector.push(token);
          sections.push(token);
          collector = token[2] = [];
          break;
        case "/":
          sections.pop();
          collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
}