// package: lis
// file: va-lis.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as va_lis_pb from "./va-lis_pb";

interface ISampleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sample_get_lab_tests: ISampleServiceService_Isample_get_lab_tests;
}

interface ISampleServiceService_Isample_get_lab_tests extends grpc.MethodDefinition<va_lis_pb.sample_id, va_lis_pb.sample_test_id> {
    path: "/lis.SampleService/sample_get_lab_tests";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<va_lis_pb.sample_id>;
    requestDeserialize: grpc.deserialize<va_lis_pb.sample_id>;
    responseSerialize: grpc.serialize<va_lis_pb.sample_test_id>;
    responseDeserialize: grpc.deserialize<va_lis_pb.sample_test_id>;
}

export const SampleServiceService: ISampleServiceService;

export interface ISampleServiceServer {
    sample_get_lab_tests: grpc.handleUnaryCall<va_lis_pb.sample_id, va_lis_pb.sample_test_id>;
}

export interface ISampleServiceClient {
    sample_get_lab_tests(request: va_lis_pb.sample_id, callback: (error: grpc.ServiceError | null, response: va_lis_pb.sample_test_id) => void): grpc.ClientUnaryCall;
    sample_get_lab_tests(request: va_lis_pb.sample_id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: va_lis_pb.sample_test_id) => void): grpc.ClientUnaryCall;
    sample_get_lab_tests(request: va_lis_pb.sample_id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: va_lis_pb.sample_test_id) => void): grpc.ClientUnaryCall;
}

export class SampleServiceClient extends grpc.Client implements ISampleServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sample_get_lab_tests(request: va_lis_pb.sample_id, callback: (error: grpc.ServiceError | null, response: va_lis_pb.sample_test_id) => void): grpc.ClientUnaryCall;
    public sample_get_lab_tests(request: va_lis_pb.sample_id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: va_lis_pb.sample_test_id) => void): grpc.ClientUnaryCall;
    public sample_get_lab_tests(request: va_lis_pb.sample_id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: va_lis_pb.sample_test_id) => void): grpc.ClientUnaryCall;
}
