#!/usr/bin/env node


import * as path from 'path';
import * as fs from 'fs';
import * as shelljs from 'shelljs';

const PROTOS_RAW = process.argv.slice(2);
const PROTOS = PROTOS_RAW.map(x=> `${x}.proto`)
if (PROTOS.length === 0) {
    console.log('No proto name passed ')
    process.exit(0);
}
// process.env.PATH += path.delimiter + path.join(process.cwd(), 'node_modules', '.bin');
const ROOT_NODE_MODULE = shelljs.exec('npm root -g', { silent: true }).stdout.trim();
const PWD = process.env.PWD;


const PROTO_DIR = path.join(PWD, './src');
const PROTO_DIST = path.join(PWD, './dist');
const PROTO_BUILT = path.join(PWD, './src/types');


const importStyle = 'commonjs';

const PLUGIN = `protoc-gen-ts="${ROOT_NODE_MODULE}/grpc_tools_node_protoc_ts/bin/protoc-gen-ts"`;
const JS_OUTPUT = `import_style=${importStyle},binary:${PROTO_BUILT}`;
const TS_OUTPUT = `generate_package_definition:${PROTO_BUILT}`;
const GRPC_OUTPUT = `grpc_js:${PROTO_BUILT}`;
const PROTO_PATH = `${PROTO_DIR}`;

const STR = `--js_out=${JS_OUTPUT} --ts_out=${TS_OUTPUT} --grpc_out=${GRPC_OUTPUT} --plugin=${PLUGIN} --proto_path=${PROTO_PATH}`;
// const STR = `--ts_out=${TS_OUTPUT} --plugin=${PLUGIN} --proto_path=${PROTO_PATH}`;

console.log('PROTOS:                ', PROTOS);
console.log('DIRNAME:               ', __dirname);
console.log('PWD:                   ', PWD);
console.log('PROTO_DIR:             ', PROTO_DIR);
console.log('PROTO_DIST:            ', PROTO_DIST);
console.log('PROTO_BUILT:           ', PROTO_BUILT);
console.log('');
console.log('PLUGIN:                ', PLUGIN);
console.log('JS_OUTPUT:             ', JS_OUTPUT);
console.log('TS_OUTPUT:             ', TS_OUTPUT);
console.log('GRPC_OUTPUT:           ', GRPC_OUTPUT);
console.log('PROTO_PATH:            ', PROTO_PATH);
console.log('');


console.log('DELETING               : ', PROTO_BUILT);
shelljs.exec(`find ${PROTO_BUILT} -type f -not -name '.gitignore' -delete`);
console.log('GENERATING');
PROTOS.forEach(proto=>{
    shelljs.exec(`grpc_tools_node_protoc ${STR} ${PROTO_DIR}/${proto}`);
})

console.log('DONE');
