// html reference
console.dir(document.documentElement.lang);

console.log(document.head);
console.log(document.body);

console.log(document.body.constructor.name);

console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget);

// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
console.log(document.body.nodeName);
