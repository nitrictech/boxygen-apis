// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var builder_v1_builder_pb = require('../../builder/v1/builder_pb.js');

function serialize_boxygen_builder_v1_AddRequest(arg) {
  if (!(arg instanceof builder_v1_builder_pb.AddRequest)) {
    throw new Error('Expected argument of type boxygen.builder.v1.AddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_boxygen_builder_v1_AddRequest(buffer_arg) {
  return builder_v1_builder_pb.AddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_boxygen_builder_v1_CommitRequest(arg) {
  if (!(arg instanceof builder_v1_builder_pb.CommitRequest)) {
    throw new Error('Expected argument of type boxygen.builder.v1.CommitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_boxygen_builder_v1_CommitRequest(buffer_arg) {
  return builder_v1_builder_pb.CommitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_boxygen_builder_v1_ConfigRequest(arg) {
  if (!(arg instanceof builder_v1_builder_pb.ConfigRequest)) {
    throw new Error('Expected argument of type boxygen.builder.v1.ConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_boxygen_builder_v1_ConfigRequest(buffer_arg) {
  return builder_v1_builder_pb.ConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_boxygen_builder_v1_CopyRequest(arg) {
  if (!(arg instanceof builder_v1_builder_pb.CopyRequest)) {
    throw new Error('Expected argument of type boxygen.builder.v1.CopyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_boxygen_builder_v1_CopyRequest(buffer_arg) {
  return builder_v1_builder_pb.CopyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_boxygen_builder_v1_FromRequest(arg) {
  if (!(arg instanceof builder_v1_builder_pb.FromRequest)) {
    throw new Error('Expected argument of type boxygen.builder.v1.FromRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_boxygen_builder_v1_FromRequest(buffer_arg) {
  return builder_v1_builder_pb.FromRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_boxygen_builder_v1_FromResponse(arg) {
  if (!(arg instanceof builder_v1_builder_pb.FromResponse)) {
    throw new Error('Expected argument of type boxygen.builder.v1.FromResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_boxygen_builder_v1_FromResponse(buffer_arg) {
  return builder_v1_builder_pb.FromResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_boxygen_builder_v1_OutputResponse(arg) {
  if (!(arg instanceof builder_v1_builder_pb.OutputResponse)) {
    throw new Error('Expected argument of type boxygen.builder.v1.OutputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_boxygen_builder_v1_OutputResponse(buffer_arg) {
  return builder_v1_builder_pb.OutputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_boxygen_builder_v1_RunRequest(arg) {
  if (!(arg instanceof builder_v1_builder_pb.RunRequest)) {
    throw new Error('Expected argument of type boxygen.builder.v1.RunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_boxygen_builder_v1_RunRequest(buffer_arg) {
  return builder_v1_builder_pb.RunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var BuilderService = exports.BuilderService = {
  add: {
    path: '/boxygen.builder.v1.Builder/Add',
    requestStream: false,
    responseStream: true,
    requestType: builder_v1_builder_pb.AddRequest,
    responseType: builder_v1_builder_pb.OutputResponse,
    requestSerialize: serialize_boxygen_builder_v1_AddRequest,
    requestDeserialize: deserialize_boxygen_builder_v1_AddRequest,
    responseSerialize: serialize_boxygen_builder_v1_OutputResponse,
    responseDeserialize: deserialize_boxygen_builder_v1_OutputResponse,
  },
  commit: {
    path: '/boxygen.builder.v1.Builder/Commit',
    requestStream: false,
    responseStream: true,
    requestType: builder_v1_builder_pb.CommitRequest,
    responseType: builder_v1_builder_pb.OutputResponse,
    requestSerialize: serialize_boxygen_builder_v1_CommitRequest,
    requestDeserialize: deserialize_boxygen_builder_v1_CommitRequest,
    responseSerialize: serialize_boxygen_builder_v1_OutputResponse,
    responseDeserialize: deserialize_boxygen_builder_v1_OutputResponse,
  },
  config: {
    path: '/boxygen.builder.v1.Builder/Config',
    requestStream: false,
    responseStream: true,
    requestType: builder_v1_builder_pb.ConfigRequest,
    responseType: builder_v1_builder_pb.OutputResponse,
    requestSerialize: serialize_boxygen_builder_v1_ConfigRequest,
    requestDeserialize: deserialize_boxygen_builder_v1_ConfigRequest,
    responseSerialize: serialize_boxygen_builder_v1_OutputResponse,
    responseDeserialize: deserialize_boxygen_builder_v1_OutputResponse,
  },
  copy: {
    path: '/boxygen.builder.v1.Builder/Copy',
    requestStream: false,
    responseStream: true,
    requestType: builder_v1_builder_pb.CopyRequest,
    responseType: builder_v1_builder_pb.OutputResponse,
    requestSerialize: serialize_boxygen_builder_v1_CopyRequest,
    requestDeserialize: deserialize_boxygen_builder_v1_CopyRequest,
    responseSerialize: serialize_boxygen_builder_v1_OutputResponse,
    responseDeserialize: deserialize_boxygen_builder_v1_OutputResponse,
  },
  from: {
    path: '/boxygen.builder.v1.Builder/From',
    requestStream: false,
    responseStream: false,
    requestType: builder_v1_builder_pb.FromRequest,
    responseType: builder_v1_builder_pb.FromResponse,
    requestSerialize: serialize_boxygen_builder_v1_FromRequest,
    requestDeserialize: deserialize_boxygen_builder_v1_FromRequest,
    responseSerialize: serialize_boxygen_builder_v1_FromResponse,
    responseDeserialize: deserialize_boxygen_builder_v1_FromResponse,
  },
  run: {
    path: '/boxygen.builder.v1.Builder/Run',
    requestStream: false,
    responseStream: true,
    requestType: builder_v1_builder_pb.RunRequest,
    responseType: builder_v1_builder_pb.OutputResponse,
    requestSerialize: serialize_boxygen_builder_v1_RunRequest,
    requestDeserialize: deserialize_boxygen_builder_v1_RunRequest,
    responseSerialize: serialize_boxygen_builder_v1_OutputResponse,
    responseDeserialize: deserialize_boxygen_builder_v1_OutputResponse,
  },
};

exports.BuilderClient = grpc.makeGenericClientConstructor(BuilderService);
