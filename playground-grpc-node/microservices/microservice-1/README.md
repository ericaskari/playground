    "grpc_tools_node_protoc_ts": "^5.0.1",
    "grpc-tools": "^1.9.1",

grpc_tools_node_protoc \
--js_out=binary:../node/static_codegen/js_out \
--ts_out=../node/static_codegen/ts_out \
--grpc_out=../node/static_codegen/grpc_out \
--plugin=protoc-gen-ts="$(npm root -g)/grpc_tools_node_protoc_ts/bin/protoc-gen-ts" \
--proto_path="./" \
*.proto

// shelljs.exec(
//   'grpc_tools_node_protoc ' +
//     `--js_out="import_style=commonjs,binary:${MODEL_DIR}" ` +
//     `--ts_out="${MODEL_DIR}" ` +
//     `--grpc_out="${MODEL_DIR}" ` +
//     `--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" ` +
//     `--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto`
// );

// // https://github.com/agreatfool/grpc_tools_node_protoc_ts/tree/master/examples
// // https://github.com/dcodeIO/protobuf.js#command-line
// // https://github.com/dcodeIO/protobuf.js#command-line-api
