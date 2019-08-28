// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // add your custom rules here
    rules: {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": [//缩进
            "error",
            2
        ],
        "quotes": [//单双引号
            "error",
            "single"
        ],
        "eqeqeq": [2, "always"],//全等
        "react/prop-types": 0,//react 默认值类型校验
        "react/display-name": 0,//忘记了
        "no-console": 1,//禁止console
        "no-alert": 1,//禁止alert
        "no-empty": 2,//禁止空的语句块
        "no-unused-vars": 2,//禁止声明变量后不使用
    }
}