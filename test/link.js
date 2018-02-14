const LINKS = `
  <ul>
    <li><a href="./index.html">use native import() or polyfill importModule()</a></li>
    <li><a href="./native.html">use native import()</a></li>
    <li><a href="./polyfill.html">use polyfill importModule(abs-url)</a></li>
    <li><a href="./polyfill.local.html">use polyfill importModule(rel-url)</a></li>
    <li><a href="./polyfill.edge.html">use polyfill importModule(abs-url) for edge debug</a></li>
    <li><a href="./polyfill.edge.local.html">use polyfill importModule(rel-url) for edge debug</a></li>
  </ul>
`;

document.querySelector("div.link-contener").innerHTML = LINKS;

