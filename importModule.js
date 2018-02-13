function toAbsoluteURL(url) {
  const a = document.createElement("a");
  a.setAttribute("href", url);    // <a href="hoge.htm">
  return a.cloneNode(false).href; // -> "http://example.com/hoge.htm"
}

export function importModule(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const tempGlobal = "$importModule$" + Math.random().toString(32).slice(2);
    script.type = "module";

    script.onload = () => {
      resolve(window[tempGlobal]);
      delete window[tempGlobal];
      script.remove();
      URL.revokeObjectURL(script.src);
    };
    script.onerror = () => {
      reject(new Error(`Failed to load module script with URL ${url}`));
      delete window[tempGlobal];
      script.remove();
      URL.revokeObjectURL(script.src);
    };

    const absURL = toAbsoluteURL(url);
    const loader = `import * as m from "${absURL}"; window.${tempGlobal} = m;`;
    const blob = new Blob([loader], { type: "text/javascript" });
    script.src = URL.createObjectURL(blob);

    document.head.appendChild(script);
  });
}

