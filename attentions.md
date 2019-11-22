# polyfill
- `.babelrc`文件中设置完，必须将默认的`react-app`preset去掉，不然`Object.values`等polyfill不生效
```
"presets": [
    "@babel/react",
    [
      "@babel/preset-env",
      {
        "debug": true,
        "useBuiltIns": "usage",
        "targets": {
          "chrome": "49"
        },
        "corejs": { "version": 3, "proposals": true }
      }
    ]
  ],
```