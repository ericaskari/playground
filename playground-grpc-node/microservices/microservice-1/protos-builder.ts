import * as path from 'path';
import * as shelljs from 'shelljs';

process.env.PATH += path.delimiter + path.join(process.cwd(), 'node_modules', '.bin');
const ROOT_NODE_MODULE = shelljs.exec('npm root -g', { silent: true }).stdout.trim();

// const MODEL_DIR = path.join(__dirname, './models');
const PROTO_DIR = path.join(__dirname, './protos');
const PROTO_BUILT = path.join(__dirname, './models');
const PROTOC_GEN_TS_PATH = path.join(__dirname, './node_modules/.bin/protoc-gen-ts');
const importStyle = 'commonjs';

const PLUGIN = `protoc-gen-ts="${ROOT_NODE_MODULE}/grpc_tools_node_protoc_ts/bin/protoc-gen-ts"`;
const JS_OUTPUT = `import_style=${importStyle},binary:${PROTO_BUILT}`;
const TS_OUTPUT = `generate_package_definition:${PROTO_BUILT}`;
const GRPC_OUTPUT = `grpc_js:${PROTO_BUILT}`;
const PROTO_PATH = `${PROTO_DIR}`;

const STR = `--js_out=${JS_OUTPUT} --ts_out=${TS_OUTPUT} --grpc_out=${GRPC_OUTPUT} --plugin=${PLUGIN} --proto_path=${PROTO_PATH}`;

console.log('DIRNAME:               ', __dirname);
console.log('PROTO_DIR:             ', PROTO_DIR);
console.log('PROTO_BUILT:           ', PROTO_BUILT);
console.log('PROTOC_GEN_TS_PATH:    ', PROTOC_GEN_TS_PATH);
console.log('');
console.log('PLUGIN:                ', PLUGIN);
console.log('JS_OUTPUT:             ', JS_OUTPUT);
console.log('TS_OUTPUT:             ', TS_OUTPUT);
console.log('GRPC_OUTPUT:           ', GRPC_OUTPUT);
console.log('PROTO_PATH:            ', PROTO_PATH);
console.log('');

shelljs.exec(`find ${PROTO_BUILT} -type f -not -name '.gitignore' -delete`);
console.log('DELETING');
console.log('GENERATING');
shelljs.exec(`grpc_tools_node_protoc ${STR} helloworld.proto`);
console.log('DONE');
