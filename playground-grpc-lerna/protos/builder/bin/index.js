#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var shelljs = __importStar(require("shelljs"));
var PROTOS_RAW = process.argv.slice(2);
var PROTOS = PROTOS_RAW.map(function (x) { return x + ".proto"; });
if (PROTOS.length === 0) {
    console.log('No proto name passed ');
    process.exit(0);
}
// process.env.PATH += path.delimiter + path.join(process.cwd(), 'node_modules', '.bin');
var ROOT_NODE_MODULE = shelljs.exec('npm root -g', { silent: true }).stdout.trim();
var PWD = process.env.PWD;
var PROTO_DIR = path.join(PWD, './src');
var PROTO_DIST = path.join(PWD, './dist');
var PROTO_BUILT = path.join(PWD, './src/types');
var importStyle = 'commonjs';
var PLUGIN = "protoc-gen-ts=\"" + ROOT_NODE_MODULE + "/grpc_tools_node_protoc_ts/bin/protoc-gen-ts\"";
var JS_OUTPUT = "import_style=" + importStyle + ",binary:" + PROTO_BUILT;
var TS_OUTPUT = "generate_package_definition:" + PROTO_BUILT;
var GRPC_OUTPUT = "grpc_js:" + PROTO_BUILT;
var PROTO_PATH = "" + PROTO_DIR;
var STR = "--js_out=" + JS_OUTPUT + " --ts_out=" + TS_OUTPUT + " --grpc_out=" + GRPC_OUTPUT + " --plugin=" + PLUGIN + " --proto_path=" + PROTO_PATH;
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
shelljs.exec("find " + PROTO_BUILT + " -type f -not -name '.gitignore' -delete");
console.log('GENERATING');
PROTOS.forEach(function (proto) {
    shelljs.exec("grpc_tools_node_protoc " + STR + " " + PROTO_DIR + "/" + proto);
});
console.log('DONE');
//# sourceMappingURL=index.js.map