module.exports = {extends: ['@commitlint/config-angular']};
//也可以自己定义type
// module.exports = {
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'type-enum': [2, 'always', [
//       "feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"
//     ]],
//     'subject-full-stop': [0, 'never'],
//     'subject-case': [0, 'never']
//   }
// };


/*
type 取值
Must be one of the following:

build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
docs: Documentation only changes
feat: A new feature
fix: A bug fix
perf: A code change that improves performance
refactor: A code change that neither fixes a bug nor adds a feature
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
test: Adding missing tests or correcting existing tests
*/