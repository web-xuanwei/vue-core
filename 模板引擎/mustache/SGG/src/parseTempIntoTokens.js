import Scanner from "./Scanner"

export default function parseTemplateToTokens(tempStr) {
  var tokens = [];
  var scanner = new Scanner(tempStr);
  var words;
  //让扫描器工作
  while (!scanner.eos()) {
    words = scanner.scanUtil("{{");
    if (words !== "") {
      tokens.push(["text", words]);
    }

    scanner.scan("{{");
    words = scanner.scanUtil("}}"); //我们要读的值

    if (words !== "") {
      if (words[0] === "#") {
        tokens.push(["#", words.substring(1)]);
      } else if (words[0] === '/') {
        tokens.push(["/", words.substring(1)]);
      } else {
        tokens.push(["name", words]);
      }
    }

    scanner.scan("}}");
  }

  return tokens;
}