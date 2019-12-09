
### 使用 commitlint 步骤

#### 1 在项目根目录执行

```
npm install --save-dev husky

npm install --save-dev @commitlint/cli @commitlint/config-angular 
echo "module.exports = {extends: ['@commitlint/config-angular']};" > commitlint.config.js
```

#### 2 配置package.json
```
"husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
```

#### 3 git commit -m"xxx: xxx"

#### 4 commit message 格式要求如下

```
git commit -m"feat(commit-config): add commit"
```

以后不能再随便的写 

```
git commit -m'xxx'
```

可以使用 angular 提交规范，参考[commitlint-angular](https://www.npmjs.com/package/@commitlint/config-angular)

[angular提交规范-github](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)


Commit Message格式

每次提交，Commit message 都包括两个部分：Header，Body 。header中的 type 和 subject有特殊的规定

    <type>(<scope>): <subject>

其中，Header 是必需的，Body 可以省略。 不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。

Header ：包括三个type（必填）、scope（选填）和 subject（必填）

type:用于声明此次commit的主要目的类别：


    * feat：新功能（feature）
    * fix：修补bug
    * docs：文档（documentation）
    * style： 格式（不影响代码运行的变动）
    * refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    * test：增加测试
    * chore：构建过程或辅助工具的变动

注：如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。

scope:用于说明commit影响的范围；如数据层(model)，视图层(view)，控制层（controller）等。



subject  :是 commit 目的的简短描述，不超过50个字符。

    * 以动词开头，使用第一人称现在时，比如change，而不是changed或changes

Body

Body 部分是对本次 commit 的详细描述，可以分成多行

    * 使用第一人称现在时，比如使用change而不是changed或changes。
    * 应该说明代码变动的动机，以及与以前行为的对比。

