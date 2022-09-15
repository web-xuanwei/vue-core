import parseTemplateToTokens from "./parseTempIntoTokens";
import renderTemplate from "./renderTemplate"
/**
 * 
 * 基本思路可以这么理解：
 * 1.找到所有的文本值与我们需要填充的JS值部分
 * 2.经过解析生成最终html
 */
window.BUG_template = {
    render(templateStr, data){
        var tokens = parseTemplateToTokens(templateStr);
        console.log(tokens);
        var domStr = renderTemplate(tokens, data);
        console.log(domStr);
    }
}