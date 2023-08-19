// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2015 gRPC authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var helloworld_pb = require('./helloworld_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_GreeterPackage_GoodbyeMessage(arg) {
  if (!(arg instanceof helloworld_pb.GoodbyeMessage)) {
    throw new Error('Expected argument of type GreeterPackage.GoodbyeMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GreeterPackage_GoodbyeMessage(buffer_arg) {
  return helloworld_pb.GoodbyeMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GreeterPackage_GoodbyeResponse(arg) {
  if (!(arg instanceof helloworld_pb.GoodbyeResponse)) {
    throw new Error('Expected argument of type GreeterPackage.GoodbyeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GreeterPackage_GoodbyeResponse(buffer_arg) {
  return helloworld_pb.GoodbyeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GreeterPackage_HelloMessage(arg) {
  if (!(arg instanceof helloworld_pb.HelloMessage)) {
    throw new Error('Expected argument of type GreeterPackage.HelloMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GreeterPackage_HelloMessage(buffer_arg) {
  return helloworld_pb.HelloMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GreeterPackage_HelloResponse(arg) {
  if (!(arg instanceof helloworld_pb.HelloResponse)) {
    throw new Error('Expected argument of type GreeterPackage.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GreeterPackage_HelloResponse(buffer_arg) {
  return helloworld_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/GreeterPackage.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.HelloMessage,
    responseType: helloworld_pb.HelloResponse,
    requestSerialize: serialize_GreeterPackage_HelloMessage,
    requestDeserialize: deserialize_GreeterPackage_HelloMessage,
    responseSerialize: serialize_GreeterPackage_HelloResponse,
    responseDeserialize: deserialize_GreeterPackage_HelloResponse,
  },
  sayGoodbye: {
    path: '/GreeterPackage.Greeter/SayGoodbye',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.GoodbyeMessage,
    responseType: helloworld_pb.GoodbyeResponse,
    requestSerialize: serialize_GreeterPackage_GoodbyeMessage,
    requestDeserialize: deserialize_GreeterPackage_GoodbyeMessage,
    responseSerialize: serialize_GreeterPackage_GoodbyeResponse,
    responseDeserialize: deserialize_GreeterPackage_GoodbyeResponse,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
