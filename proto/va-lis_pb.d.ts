// package: lis
// file: va-lis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class sample_id extends jspb.Message { 
    getSampleId(): string;
    setSampleId(value: string): sample_id;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): sample_id.AsObject;
    static toObject(includeInstance: boolean, msg: sample_id): sample_id.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: sample_id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): sample_id;
    static deserializeBinaryFromReader(message: sample_id, reader: jspb.BinaryReader): sample_id;
}

export namespace sample_id {
    export type AsObject = {
        sampleId: string,
    }
}

export class TestID extends jspb.Message { 
    getTestId(): number;
    setTestId(value: number): TestID;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestID.AsObject;
    static toObject(includeInstance: boolean, msg: TestID): TestID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestID;
    static deserializeBinaryFromReader(message: TestID, reader: jspb.BinaryReader): TestID;
}

export namespace TestID {
    export type AsObject = {
        testId: number,
    }
}

export class sample_test_id extends jspb.Message { 
    getSampleId(): string;
    setSampleId(value: string): sample_test_id;

    clearTestsList(): void;
    getTestsList(): Array<TestID>;
    setTestsList(value: Array<TestID>): sample_test_id;
    addTests(value?: TestID, index?: number): TestID;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): sample_test_id.AsObject;
    static toObject(includeInstance: boolean, msg: sample_test_id): sample_test_id.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: sample_test_id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): sample_test_id;
    static deserializeBinaryFromReader(message: sample_test_id, reader: jspb.BinaryReader): sample_test_id;
}

export namespace sample_test_id {
    export type AsObject = {
        sampleId: string,
        testsList: Array<TestID.AsObject>,
    }
}
