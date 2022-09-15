export default function lookup(data, keyName) {
  if (keyName.indexOf(".") !== -1 && keyName.length > 1) {
    let keys = keyName.split('.');
    let tmp = data;
    for (let i = 0; i < keys.length; i++) {
      tmp = tmp[keys[i]]
    }
    return tmp;
  } else if (keyName === '.') {
    return data;
  }
  return data[keyName];
}