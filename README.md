# Dynamic import() polyfill

importModule() is a polyfill of dynamic import JavaScript function.

## Prepare

`npm i -S @uupaa/dynamic-import-polyfill`

## Browser support

| Browser                   | `<script type="module">` | `import()`<br>(js native) | `importModule()`<br>(polyfill) |
|---------------------------|------------|---------|------------------------------|
| Chrome                    | 61+        | 63+     | 61+                          |
| Chrome (Android)          | 61+        | 63+     | 61+                          |
| Safari                    | 10.1+      | 11+     | 10.1+                        |
| Safari (iOS)              | 10.3+      | 11+     | 10.3+                        |
| Firefox                   | 60+        | 67+     | 60+                          |
| Edge                      | 16+        | :x:     | 16+                          |
| new Edge (Chromium based) | 76+        | 76+     | 76+                          |
| IE                        | :x:        | :x:     | :x:                          |

Browser should supports are ES Modules(`<script type="module">`), Promise, Blob and window.URL functions.

`import()` function browser compatibilitiy resources:

- MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Browser_compatibility
- Can I use: https://caniuse.com/#search=import

## Usage

async / await style

```js
<script type="module">
import { importModule } from "https://uupaa.github.io/dynamic-import-polyfill/importModule.js";

(async() => {
  const Modules = {
    Lib1: "./Lib1.js",
    Lib2: "https://example.com/Lib2.js",
  };
  const { Lib1 } = await importModule(Modules.Lib1); // named export and import
  const { default: Lib2 } = await importModule(Modules.Lib2); // default export and import

  const lib1 = new Lib1();
  const lib2 = new Lib2();
  console.log( lib1.say() );
  console.log( lib2.say() );
})();
```

or Promise style.

```js
<script type="module">
import { importModule } from "https://uupaa.github.io/dynamic-import-polyfill/importModule.js";

importModule("./Lib1.js").then(Lib1 => {
  const lib1 = new Lib1();
  console.log( lib1.say() );
});
```


## Demo

- [use native import() or polyfill importModule()](https://uupaa.github.io/dynamic-import-polyfill/test/index.html)
- [use native import()](https://uupaa.github.io/dynamic-import-polyfill/test/native.html)
- [use polyfill importModule(abs-url)](https://uupaa.github.io/dynamic-import-polyfill/test/polyfill.abs.html)
- [use polyfill importModule(rel-url)](https://uupaa.github.io/dynamic-import-polyfill/test/polyfill.rel.html)

```html
<!DOCTYPE html><html>
<head>
<meta charset="utf-8"><title>dynamic-import-polyfill</title>
</head>
<body>
  <script type="module">
    import { importModule } from "../importModule.js";

    (async() => {
      const Modules = {
        a: "https://uupaa.github.io/dynamic-import-polyfill/test/a.js",
        b: "https://uupaa.github.io/dynamic-import-polyfill/test/b.js",
        c: "https://uupaa.github.io/dynamic-import-polyfill/test/c.js",
      };

      const usePolyfill = Date.now() % 2;

      if (usePolyfill) {
        console.log("use polyfill");
        const { a } = await importModule(Modules.a);
        const { default: b } = await importModule(Modules.b);
        const { c } = await importModule(Modules.c);
        console.log( a(), b(), c() );
      } else {
        console.log("use native");
        // use native
        const { a } = await import(Modules.a);
        const { default: b } = await import(Modules.b);
        const { c } = await import(Modules.c);
        console.log( a(), b(), c() );
      }
    })();
  </script>
</body>
</html>
```

