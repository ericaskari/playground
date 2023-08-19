const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'npm run optimize-imports',
      'npm run prettier',
      'git add .',
      'npm run tslint',
      'npm run eslint'
    ]),
    'pre-push': tasks([
      'npm run optimize-imports',
      'npm run prettier',
      'git add .',
      'npm run check',
      'npm run lint',
      'npm run tslint',
      'npm run eslint'
    ])
  }
};
