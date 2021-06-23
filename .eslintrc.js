module.exports = {
	"settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ios.js", ".android.js", ".native.js", ".tsx"]
      }
    }
  },
	"parser": "@babel/eslint-parser",
	"extends": "airbnb",
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": 2017,
		"ecmaFeatures": {
			"experimentalObjectRestSpread" : true,
			"jsx": true,
			"legacyDecorators": true
		}
	},
	"plugins": [
		"react",
		"jsx-a11y",
        "import",
    	"react-native",
		"@babel"
	],
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true,
		"jquery": true
	},
	"rules": {
		"react/jsx-filename-extension": [1, {
			"extensions": [".js", ".jsx"]
		}],
		"react/require-default-props": [0],
		"react/no-unused-prop-types": [2, {
			"skipShapeProps": true
		}],
		"react/no-did-mount-set-state": 0,
		"react/no-multi-comp": [0],
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/forbid-prop-types": 0,
		"jsx-quotes": [2, "prefer-single"],
		"jsx-a11y/href-no-hash": 0,
		"jsx-a11y/aria-role": 0,
		"import/prefer-default-export": 0,
		"import/no-cycle": 0,
		"camelcase": 0,
		"no-underscore-dangle": 0,
		"no-return-assign": 0,
		"no-param-reassign": 0,
		"no-tabs": 0,
		"no-multi-spaces": 2,
		"no-eval": 2,
		"no-extend-native": 2,
		"no-multi-str": 2,
		"no-use-before-define": 2,
		"no-const-assign": 2,
		"no-cond-assign": 2,
		"no-constant-condition": 2,
		"no-control-regex": 2,
		"no-debugger": 2,
		"no-delete-var": 2,
		"no-dupe-keys": 2,
		"no-dupe-args": 2,
		"no-dupe-class-members": 2,
		"no-duplicate-case": 2,
		"no-else-return": [0, {allowElseIf: true}],
		"no-empty": 2,
		"no-empty-character-class": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 2,
		"no-extra-semi": 2,
		"no-fallthrough": 2,
		"no-func-assign": 2,
		"no-inner-declarations": [2, "functions"],
		"no-invalid-regexp": 2,
		"no-irregular-whitespace": 2,
		"no-mixed-spaces-and-tabs": 2,
		"no-sparse-arrays": 2,
		"no-negated-in-lhs": 2,
		"no-obj-calls": 2,
		"no-octal": 2,
		"no-redeclare": 2,
		"no-regex-spaces": 2,
		"no-undef": 2,
		"no-unreachable": 2,
		"no-unused-expressions": 0,
		"no-unused-vars": [2, {
			"vars": "all",
			"args": "after-used"
		}],
		"max-len": 0,
		"react/jsx-uses-vars": 2,
		"no-void": 2,
		"no-var": 2,
		"one-var": [2, "never"],
		"no-lonely-if": 2,
		"no-trailing-spaces": 2,
		"complexity": [1, 31],
		"space-in-parens": [2, "never"],
		"space-before-function-paren": [2, "never"],
		"space-before-blocks": [2, "always"],
		"indent": [2, "tab", {"SwitchCase": 1}],
		"eol-last": [2, "always"],
		"comma-dangle": [2, "never"],
		"keyword-spacing": 2,
		"block-spacing": 2,
		"brace-style": [2, "1tbs", { "allowSingleLine": true }],
		"computed-property-spacing": 2,
		"comma-spacing": 2,
		"comma-style": 2,
		"guard-for-in": 2,
		"wrap-iife": 2,
		"block-scoped-var": 2,
		"curly": [2, "all"],
		"eqeqeq": [2, "allow-null"],
		"new-cap":  [2],
		"use-isnan": 2,
		"valid-typeof": 2,
		"linebreak-style": 0,
		"prefer-template": 2,
		"template-curly-spacing": [2, "always"],
		"quotes": [2, "single"],
		"semi": [2, "always"],
		"prefer-const": 2,
		"object-shorthand": 2,
		"consistent-return": 0,
		"global-require": "off",
		"react-native/no-unused-styles": 2,
		"react/jsx-one-expression-per-line": 0,
		"require-await": 2,
		"func-names": 0,
		"react/sort-comp": ["error", {
			"order": [
				"static-variables",
				"static-methods",
				"lifecycle",
				"everything-else",
				"render"
			]
		}],
		"react/static-property-placement": [0],
		"arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
		"react/jsx-props-no-spreading": [1],
		"react/jsx-curly-newline": [0],
		"react/state-in-constructor": [0],
		"no-async-promise-executor": [0],
		"max-classes-per-file": [0],
		"no-multiple-empty-lines": [0]
	},
	"globals": {
		"__DEV__": true
	}
};