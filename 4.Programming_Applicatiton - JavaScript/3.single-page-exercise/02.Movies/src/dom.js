export function e(type, attributes, ...content) {


  let result = document.createElement(type);

  for (let [attribute, value] of Object.entries(attributes || {})) {
    if (attribute.substring(0, 2) == 'on') {
      result.addEventListener(attribute.substring(2).toLocaleLowerCase(), value);
    } else {
      result[attribute] = value;
    }
  }

  content = content.reduce((a, x) => a.concat(Array.isArray(x) ? x : [x]), []);

  
  content.forEach((e) => {
    if (typeof e == 'string' || typeof e == 'number') {
      let node = document.createTextNode(e);
      result.appendChild(node);
    } else {
      result.appendChild(e);
    }
  });

  return result;
}
