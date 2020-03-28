module.exports = {
  name: 'themes',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/themes',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
