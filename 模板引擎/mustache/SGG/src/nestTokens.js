/**
 * 返回折叠的tokens
 * @param {*} tokens 
 */
export default function nestTokens(tokens){
    var nestedTokens = [];

    var sections = [];

    for(let i = 0; i < tokens.length; i++){
      let token = tokens[i];
      switch(token[i]){
        case "#":
          token[2] = [];
          sections.push(token);
          break;
        case "/":
          let sectoin = sections.pop();
          nestedTokens.pop(sectoin);
          break;
        default:
          if(sections.length === 0){
            nestedTokens.push(token);
          }else{
            
          }
      }
    }
}