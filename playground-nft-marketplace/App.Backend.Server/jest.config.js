module.exports = {
    displayName: 'App.Backend.Server',
    preset: '../jest.preset.js',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
        },
    },
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': 'ts-jest',
    },
    moduleFileExtensions: [ 'ts', 'js', 'html' ],
    coverageDirectory: '../../coverage/App.Backend.Server',
};
