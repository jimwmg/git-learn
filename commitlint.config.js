// module.exports = {extends: ['@commitlint/config-angular']};
//也可以自己定义type 比如：git commit -m"my-type: 更新readme"
module.exports = {
  // extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [2, 'always', ["my-type",
      "feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"
    ]],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
};

//[build, ci, docs, feat, fix, perf, refactor, revert, style, test]



