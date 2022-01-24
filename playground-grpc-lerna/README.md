    
    
    npm install lerna -g


To make sure project is working fine, open module/* each as a separate project in IDE.


I hope it helps anyone looking to run grpc with typescript.
we all know how hard it can be :)

Let's say we have a database.proto 

what we will do:
1. Create script to generate javascript and types.

First we create a project with `npm init -y` in an empty directory.
then we install
```
npm i @grpc/grpc-js
npm i shelljs --save-dev
npm i @types/shelljs --save-dev
npm i google-protobuf
npm i @types/google-protobuf --save-dev
npm i ts-node --save-dev

my versions: 
"@grpc/grpc-js": "^1.2.2",
"@types/google-protobuf": "^3.7.4",
"google-protobuf": "^3.14.0-rc.1",
"ts-node": "^9.1.0"
```

and we install `grpc-tools` globally: because we need to use `grpc_tools_node_protoc` in command line.
```
npm install grpc-tools -g

// my version: grpc-tools@1.10.0
```
we create file named something like `cook-proto.ts` in this we are going to use `grpc_tools_node_protoc` command which is located in `grpc-tools` that we installed globally earlier.

inside `src` folder we have `database.proto` and `models` folder for output

sample database.proto: 
```
syntax = "proto3";
import "google/protobuf/empty.proto";

package database;


message Picture {
  int32 id = 1;
  string title = 2;
}

message PictureById {
  int32 id = 1;
  string title = 2;
}

service Database {
  rpc GetPictures(google.protobuf.Empty) returns (Picture) {};
  rpc GetPictureById(PictureById) returns (Picture) {};
}

```


sample cook-proto.ts: 
```
import * as path from 'path';
import * as shelljs from 'shelljs';

// Using args as protos to cook.
const MY_ARGV = process.argv.slice(2);

// including .proto to arguments names.
const PROTOS = MY_ARGV.map(x=> `${x}.proto`)
if (PROTOS.length === 0) {
    console.log('No proto name passed ')
    process.exit(0);
}

// absolute address of root modules installed.
const ROOT_NODE_MODULE = shelljs.exec('npm root -g', { silent: true }).stdout.trim();


// address of where process was started. 
const PWD = process.env.PWD;

// location of proto files.
const PROTO_DIR = path.join(PWD, './src');

// location to save output.
const PROTO_BUILT = path.join(PWD, './src/models');


const importStyle = 'commonjs';
const PLUGIN = `protoc-gen-ts="${ROOT_NODE_MODULE}/grpc_tools_node_protoc_ts/bin/protoc-gen-ts"`;
const JS_OUTPUT = `import_style=${importStyle},binary:${PROTO_BUILT}`;
const TS_OUTPUT = `generate_package_definition:${PROTO_BUILT}`;
const GRPC_OUTPUT = `grpc_js:${PROTO_BUILT}`;
const PROTO_PATH = `${PROTO_DIR}`;

const STR = `--js_out=${JS_OUTPUT} --ts_out=${TS_OUTPUT} --grpc_out=${GRPC_OUTPUT} --plugin=${PLUGIN} --proto_path=${PROTO_PATH}`;

// Uncomment for debugging.
// console.log('PROTOS:                ', PROTOS);
// console.log('DIRNAME:               ', __dirname);
// console.log('PWD:                   ', PWD);
// console.log('PROTO_DIR:             ', PROTO_DIR);
// console.log('PROTO_BUILT:           ', PROTO_BUILT);
// console.log('');
// console.log('PLUGIN:                ', PLUGIN);
// console.log('JS_OUTPUT:             ', JS_OUTPUT);
// console.log('TS_OUTPUT:             ', TS_OUTPUT);
// console.log('GRPC_OUTPUT:           ', GRPC_OUTPUT);
// console.log('PROTO_PATH:            ', PROTO_PATH);
// console.log('');

// console.log('DELETING               : ', PROTO_BUILT);
// Uncomment after making sure all paths are ok.
// shelljs.exec(`find ${PROTO_BUILT} -type f -not -name '.gitignore' -delete`);

console.log('GENERATING');

PROTOS.forEach(proto=>{
    shelljs.exec(`grpc_tools_node_protoc ${STR} ${proto}`);
})
```
then we can generate types and javascript files: 

```
ts-node cook-proto.ts database
```
