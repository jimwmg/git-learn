// module.exports = {extends: ['@commitlint/config-angular']};
//也可以自己定义type
module.exports = {
  // extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ["my-type",
      "feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"
    ]],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
};

//[build, ci, docs, feat, fix, perf, refactor, revert, style, test]



