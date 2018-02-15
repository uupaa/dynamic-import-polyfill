const LINKS = `
  <ul>
    <li><a href="./index.html">use native import() or polyfill importModule()</a></li>
    <li><a href="./native.html">use native import()</a></li>
    <li><a href="./polyfill.abs.html">use polyfill importModule(abs-url)</a></li>
    <li><a href="./polyfill.rel.html">use polyfill importModule(rel-url)</a></li>
    <li><a href="./polyfill.abs.nested.html">use polyfill importModule(abs-url) and nested import</a></li>
    <li><a href="./polyfill.rel.nested.html">use polyfill importModule(rel-url) and nested import</a></li>
  </ul>
`;

document.querySelector("div.link-contener").innerHTML = LINKS;

