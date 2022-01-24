// package: GreeterPackage
// file: helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as helloworld_pb from "./helloworld_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    sayGoodbye: IGreeterService_ISayGoodbye;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<helloworld_pb.HelloMessage, helloworld_pb.HelloResponse> {
    path: "/GreeterPackage.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_pb.HelloMessage>;
    requestDeserialize: grpc.deserialize<helloworld_pb.HelloMessage>;
    responseSerialize: grpc.serialize<helloworld_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<helloworld_pb.HelloResponse>;
}
interface IGreeterService_ISayGoodbye extends grpc.MethodDefinition<helloworld_pb.GoodbyeMessage, helloworld_pb.GoodbyeResponse> {
    path: "/GreeterPackage.Greeter/SayGoodbye";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_pb.GoodbyeMessage>;
    requestDeserialize: grpc.deserialize<helloworld_pb.GoodbyeMessage>;
    responseSerialize: grpc.serialize<helloworld_pb.GoodbyeResponse>;
    responseDeserialize: grpc.deserialize<helloworld_pb.GoodbyeResponse>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<helloworld_pb.HelloMessage, helloworld_pb.HelloResponse>;
    sayGoodbye: grpc.handleUnaryCall<helloworld_pb.GoodbyeMessage, helloworld_pb.GoodbyeResponse>;
}

export interface IGreeterClient {
    sayHello(request: helloworld_pb.HelloMessage, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_pb.HelloMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_pb.HelloMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayGoodbye(request: helloworld_pb.GoodbyeMessage, callback: (error: grpc.ServiceError | null, response: helloworld_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
    sayGoodbye(request: helloworld_pb.GoodbyeMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
    sayGoodbye(request: helloworld_pb.GoodbyeMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: helloworld_pb.HelloMessage, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_pb.HelloMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_pb.HelloMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayGoodbye(request: helloworld_pb.GoodbyeMessage, callback: (error: grpc.ServiceError | null, response: helloworld_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
    public sayGoodbye(request: helloworld_pb.GoodbyeMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
    public sayGoodbye(request: helloworld_pb.GoodbyeMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
}
