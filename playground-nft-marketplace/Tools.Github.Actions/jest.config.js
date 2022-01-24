module.exports = {
    displayName: 'Tools.Github.Actions',
    preset: '../jest.preset.js',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
        },
    },
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]sx?$': 'ts-jest',
    },
    moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx' ],
    coverageDirectory: '../coverage/Tools.Github.Actions',
};
