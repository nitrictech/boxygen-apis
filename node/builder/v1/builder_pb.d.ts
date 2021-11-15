// package: boxygen.builder.v1
// file: builder/v1/builder.proto

import * as jspb from "google-protobuf";

export class Container extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Container.AsObject;
  static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Container;
  static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
}

export namespace Container {
  export type AsObject = {
    id: string,
  }
}

export class OutputResponse extends jspb.Message {
  clearLogList(): void;
  getLogList(): Array<string>;
  setLogList(value: Array<string>): void;
  addLog(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OutputResponse): OutputResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputResponse;
  static deserializeBinaryFromReader(message: OutputResponse, reader: jspb.BinaryReader): OutputResponse;
}

export namespace OutputResponse {
  export type AsObject = {
    logList: Array<string>,
  }
}

export class AddRequest extends jspb.Message {
  hasContainer(): boolean;
  clearContainer(): void;
  getContainer(): Container | undefined;
  setContainer(value?: Container): void;

  getSrc(): string;
  setSrc(value: string): void;

  getDest(): string;
  setDest(value: string): void;

  getFrom(): string;
  setFrom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRequest): AddRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRequest;
  static deserializeBinaryFromReader(message: AddRequest, reader: jspb.BinaryReader): AddRequest;
}

export namespace AddRequest {
  export type AsObject = {
    container?: Container.AsObject,
    src: string,
    dest: string,
    from: string,
  }
}

export class CommitRequest extends jspb.Message {
  hasContainer(): boolean;
  clearContainer(): void;
  getContainer(): Container | undefined;
  setContainer(value?: Container): void;

  getTag(): string;
  setTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommitRequest): CommitRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitRequest;
  static deserializeBinaryFromReader(message: CommitRequest, reader: jspb.BinaryReader): CommitRequest;
}

export namespace CommitRequest {
  export type AsObject = {
    container?: Container.AsObject,
    tag: string,
  }
}

export class ConfigRequest extends jspb.Message {
  hasContainer(): boolean;
  clearContainer(): void;
  getContainer(): Container | undefined;
  setContainer(value?: Container): void;

  clearEntrypointList(): void;
  getEntrypointList(): Array<string>;
  setEntrypointList(value: Array<string>): void;
  addEntrypoint(value: string, index?: number): string;

  clearCmdList(): void;
  getCmdList(): Array<string>;
  setCmdList(value: Array<string>): void;
  addCmd(value: string, index?: number): string;

  getWorkingDir(): string;
  setWorkingDir(value: string): void;

  getUser(): string;
  setUser(value: string): void;

  getEnvMap(): jspb.Map<string, string>;
  clearEnvMap(): void;
  clearPortsList(): void;
  getPortsList(): Array<number>;
  setPortsList(value: Array<number>): void;
  addPorts(value: number, index?: number): number;

  clearVolumesList(): void;
  getVolumesList(): Array<string>;
  setVolumesList(value: Array<string>): void;
  addVolumes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigRequest): ConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigRequest;
  static deserializeBinaryFromReader(message: ConfigRequest, reader: jspb.BinaryReader): ConfigRequest;
}

export namespace ConfigRequest {
  export type AsObject = {
    container?: Container.AsObject,
    entrypointList: Array<string>,
    cmdList: Array<string>,
    workingDir: string,
    user: string,
    envMap: Array<[string, string]>,
    portsList: Array<number>,
    volumesList: Array<string>,
  }
}

export class CopyRequest extends jspb.Message {
  hasContainer(): boolean;
  clearContainer(): void;
  getContainer(): Container | undefined;
  setContainer(value?: Container): void;

  getSource(): string;
  setSource(value: string): void;

  getDest(): string;
  setDest(value: string): void;

  getFrom(): string;
  setFrom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyRequest): CopyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyRequest;
  static deserializeBinaryFromReader(message: CopyRequest, reader: jspb.BinaryReader): CopyRequest;
}

export namespace CopyRequest {
  export type AsObject = {
    container?: Container.AsObject,
    source: string,
    dest: string,
    from: string,
  }
}

export class FromRequest extends jspb.Message {
  getImage(): string;
  setImage(value: string): void;

  getAs(): string;
  setAs(value: string): void;

  clearIgnoreList(): void;
  getIgnoreList(): Array<string>;
  setIgnoreList(value: Array<string>): void;
  addIgnore(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FromRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FromRequest): FromRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FromRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FromRequest;
  static deserializeBinaryFromReader(message: FromRequest, reader: jspb.BinaryReader): FromRequest;
}

export namespace FromRequest {
  export type AsObject = {
    image: string,
    as: string,
    ignoreList: Array<string>,
  }
}

export class FromResponse extends jspb.Message {
  hasContainer(): boolean;
  clearContainer(): void;
  getContainer(): Container | undefined;
  setContainer(value?: Container): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FromResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FromResponse): FromResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FromResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FromResponse;
  static deserializeBinaryFromReader(message: FromResponse, reader: jspb.BinaryReader): FromResponse;
}

export namespace FromResponse {
  export type AsObject = {
    container?: Container.AsObject,
  }
}

export class RunRequest extends jspb.Message {
  hasContainer(): boolean;
  clearContainer(): void;
  getContainer(): Container | undefined;
  setContainer(value?: Container): void;

  clearCommandList(): void;
  getCommandList(): Array<string>;
  setCommandList(value: Array<string>): void;
  addCommand(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunRequest): RunRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunRequest;
  static deserializeBinaryFromReader(message: RunRequest, reader: jspb.BinaryReader): RunRequest;
}

export namespace RunRequest {
  export type AsObject = {
    container?: Container.AsObject,
    commandList: Array<string>,
  }
}

