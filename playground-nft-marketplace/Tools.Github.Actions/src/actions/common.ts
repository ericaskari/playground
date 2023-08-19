import { exec, ExecException } from 'child_process';

const readJsonSync = require('read-json-sync');

export function execute(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
        let errorData: ExecException | null = null;
        let stdoutData = '';

        const childProcess = exec(command, (error, stdout, stderr) => {

            if (error) {
                console.error('execute ExecException: ', error);
                errorData = error;
                return;
            }

            if (stderr) {
                console.log('execute stderr: ', stderr)
                return;
            }

            console.log('execute stdout: ', stdout)

            stdoutData = stdout;
        });

        childProcess.on('close', (code) => {
            console.log('execute code:', code);

            if (code === 0) {
                resolve(stdoutData);
                return;
            }

            reject(errorData);

        });
    })
}


export function getPackageJsonVersion() {
    const pkg = readJsonSync('package.json')

    if (!pkg) throw new Error("package.json can't be opened");

    return pkg.version;
}

