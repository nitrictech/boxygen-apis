// GENERATED CODE -- DO NOT EDIT!

// package: boxygen.builder.v1
// file: builder/v1/builder.proto

import * as builder_v1_builder_pb from "../../builder/v1/builder_pb";
import * as grpc from "@grpc/grpc-js";

interface IBuilderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  add: grpc.MethodDefinition<builder_v1_builder_pb.AddRequest, builder_v1_builder_pb.OutputResponse>;
  commit: grpc.MethodDefinition<builder_v1_builder_pb.CommitRequest, builder_v1_builder_pb.OutputResponse>;
  config: grpc.MethodDefinition<builder_v1_builder_pb.ConfigRequest, builder_v1_builder_pb.OutputResponse>;
  copy: grpc.MethodDefinition<builder_v1_builder_pb.CopyRequest, builder_v1_builder_pb.OutputResponse>;
  from: grpc.MethodDefinition<builder_v1_builder_pb.FromRequest, builder_v1_builder_pb.FromResponse>;
  run: grpc.MethodDefinition<builder_v1_builder_pb.RunRequest, builder_v1_builder_pb.OutputResponse>;
}

export const BuilderService: IBuilderService;

export interface IBuilderServer extends grpc.UntypedServiceImplementation {
  add: grpc.handleServerStreamingCall<builder_v1_builder_pb.AddRequest, builder_v1_builder_pb.OutputResponse>;
  commit: grpc.handleServerStreamingCall<builder_v1_builder_pb.CommitRequest, builder_v1_builder_pb.OutputResponse>;
  config: grpc.handleServerStreamingCall<builder_v1_builder_pb.ConfigRequest, builder_v1_builder_pb.OutputResponse>;
  copy: grpc.handleServerStreamingCall<builder_v1_builder_pb.CopyRequest, builder_v1_builder_pb.OutputResponse>;
  from: grpc.handleUnaryCall<builder_v1_builder_pb.FromRequest, builder_v1_builder_pb.FromResponse>;
  run: grpc.handleServerStreamingCall<builder_v1_builder_pb.RunRequest, builder_v1_builder_pb.OutputResponse>;
}

export class BuilderClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  add(argument: builder_v1_builder_pb.AddRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<builder_v1_builder_pb.OutputResponse>;
  add(argument: builder_v1_builder_pb.AddRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<builder_v1_builder_pb.OutputResponse>;
  commit(argument: builder_v1_builder_pb.CommitRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<builder_v1_builder_pb.OutputResponse>;
  commit(argument: builder_v1_builder_pb.CommitRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<builder_v1_builder_pb.OutputResponse>;
  config(argument: builder_v1_builder_pb.ConfigRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<builder_v1_builder_pb.OutputResponse>;
  config(argument: builder_v1_builder_pb.ConfigRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<builder_v1_builder_pb.OutputResponse>;
  copy(argument: builder_v1_builder_pb.CopyRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<builder_v1_builder_pb.OutputResponse>;
  copy(argument: builder_v1_builder_pb.CopyRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<builder_v1_builder_pb.OutputResponse>;
  from(argument: builder_v1_builder_pb.FromRequest, callback: grpc.requestCallback<builder_v1_builder_pb.FromResponse>): grpc.ClientUnaryCall;
  from(argument: builder_v1_builder_pb.FromRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<builder_v1_builder_pb.FromResponse>): grpc.ClientUnaryCall;
  from(argument: builder_v1_builder_pb.FromRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<builder_v1_builder_pb.FromResponse>): grpc.ClientUnaryCall;
  run(argument: builder_v1_builder_pb.RunRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<builder_v1_builder_pb.OutputResponse>;
  run(argument: builder_v1_builder_pb.RunRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<builder_v1_builder_pb.OutputResponse>;
}
