// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var database_pb = require('./database_pb.js');

function serialize_database_Empty(arg) {
  if (!(arg instanceof database_pb.Empty)) {
    throw new Error('Expected argument of type database.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_database_Empty(buffer_arg) {
  return database_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_database_FileDownloadRequest(arg) {
  if (!(arg instanceof database_pb.FileDownloadRequest)) {
    throw new Error('Expected argument of type database.FileDownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_database_FileDownloadRequest(buffer_arg) {
  return database_pb.FileDownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_database_Picture(arg) {
  if (!(arg instanceof database_pb.Picture)) {
    throw new Error('Expected argument of type database.Picture');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_database_Picture(buffer_arg) {
  return database_pb.Picture.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_database_PictureById(arg) {
  if (!(arg instanceof database_pb.PictureById)) {
    throw new Error('Expected argument of type database.PictureById');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_database_PictureById(buffer_arg) {
  return database_pb.PictureById.deserializeBinary(new Uint8Array(buffer_arg));
}


var DatabaseService = exports.DatabaseService = {
  getPictures: {
    path: '/database.Database/GetPictures',
    requestStream: false,
    responseStream: false,
    requestType: database_pb.Empty,
    responseType: database_pb.Picture,
    requestSerialize: serialize_database_Empty,
    requestDeserialize: deserialize_database_Empty,
    responseSerialize: serialize_database_Picture,
    responseDeserialize: deserialize_database_Picture,
  },
  getPictureById: {
    path: '/database.Database/GetPictureById',
    requestStream: false,
    responseStream: false,
    requestType: database_pb.PictureById,
    responseType: database_pb.Picture,
    requestSerialize: serialize_database_PictureById,
    requestDeserialize: deserialize_database_PictureById,
    responseSerialize: serialize_database_Picture,
    responseDeserialize: deserialize_database_Picture,
  },
  getPictureStreamById: {
    path: '/database.Database/GetPictureStreamById',
    requestStream: false,
    responseStream: true,
    requestType: database_pb.Empty,
    responseType: database_pb.FileDownloadRequest,
    requestSerialize: serialize_database_Empty,
    requestDeserialize: deserialize_database_Empty,
    responseSerialize: serialize_database_FileDownloadRequest,
    responseDeserialize: deserialize_database_FileDownloadRequest,
  },
};

exports.DatabaseClient = grpc.makeGenericClientConstructor(DatabaseService);
