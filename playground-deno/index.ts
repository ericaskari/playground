console.log('Starting');

const p = Deno.run({
    cmd: [ "ls", "-la" ], cwd: "./", env: { HELLO: 'true' }, stderr: 'piped', stdin: 'piped', stdout: 'piped'
});

setTimeout(() => {
    console.log('Took too long');
    p.kill(1);
}, 10000);


console.log({ p });


const status = await p.status();
console.log({ status });

console.log({ p });

const output = new TextDecoder().decode(await p.output());
const error = new TextDecoder().decode(await p.stderrOutput());

console.log('output');
console.log(output);
console.log('error');
console.log(error);


