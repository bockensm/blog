module.exports = {
  extends: [
    "airbnb-base"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "2019",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint/eslint-plugin"
  ],
  rules: {
    "array-bracket-spacing": [ "warn", "always" ],
    "array-callback-return": [ "off" ],
    "arrow-body-style": [ "warn", "as-needed" ],
    "arrow-parens": [ "warn", "as-needed" ],
    "brace-style": [ "error", "stroustrup" ],
    "class-methods-use-this": [ "off" ],
    "comma-dangle": [ "warn", "always" ],
    "computed-property-spacing": [ "off" ],
    "consistent-return": [ "off" ],
    "eqeqeq": [ "warn" ],
    "func-names": [ "error" ],
    "import/no-extraneous-dependencies": [ "off" ],
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "key-spacing": [
      "error",
      { "beforeColon": false, "afterColon": true, "mode": "strict" }
    ],
    "max-len": [ "off" ],
    "no-alert": [ "off" ],
    "no-await-in-loop": [ "error" ],
    "no-console": [
      "error",
      { allow: [ "warn", "error", "info", "trace", "group", "groupEnd" ] }
    ],
    "no-loop-func": [ "off" ],
    "no-new": [ "off" ],
    "no-param-reassign": [ "off" ],
    "no-plusplus": [ "off" ],
    "no-restricted-globals": [ "off" ],
    "no-script-url": [ "off" ],
    "no-tabs": [ "off" ],
    "no-undef": [ "off" ],
    "no-underscore-dangle": [ "off" ],
    "no-unused-vars": [ "warn" ],
    "no-use-before-define": [ "off" ],
    "object-shorthand": [ "off" ],
    "prefer-const": [ "warn" ],
    "prefer-destructuring": [ "off" ],
    "prefer-object-spread": [ "off" ],
    "prefer-template": [ "warn" ],
    "quote-props": [ "warn" ],
    "quotes": [
      "error",
      "double",
      { "avoidEscape": true }
    ],
    "radix": [ "off" ],
    "semi": [ "error", "never" ],
    "space-before-function-paren": [ "error", "never" ],
    "space-in-parens": [ "off" ], // Too many cases to handle
    "spaced-comment": [ "off" ],
    "template-curly-spacing": [ "warn", "always" ],
    "vars-on-top": [ "off" ]
  }
}
