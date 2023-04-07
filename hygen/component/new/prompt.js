module.exports = [
  {
    type: 'select',
    name: 'category',
    message: 'コンポーネントのディレクトリを選択してください',
    choices: ['atoms', 'molecules', 'organisms', 'page'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'コンポーネント名を入力してください',
  },
  {
    type: 'toggle',
    name: 'spec',
    message: 'テストファイルを作成しますか？',
    enabled: 'Yes',
    disabled: 'No',
  },
  {
    type: 'toggle',
    name: 'story',
    message: 'storyファイルを作成しますか？',
    enabled: 'Yes',
    disabled: 'No',
  },
]
