// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var va$lis_pb = require('./va-lis_pb.js');

function serialize_lis_sample_id(arg) {
  if (!(arg instanceof va$lis_pb.sample_id)) {
    throw new Error('Expected argument of type lis.sample_id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lis_sample_id(buffer_arg) {
  return va$lis_pb.sample_id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lis_sample_test_id(arg) {
  if (!(arg instanceof va$lis_pb.sample_test_id)) {
    throw new Error('Expected argument of type lis.sample_test_id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lis_sample_test_id(buffer_arg) {
  return va$lis_pb.sample_test_id.deserializeBinary(new Uint8Array(buffer_arg));
}


var SampleServiceService = exports.SampleServiceService = {
  sample_get_lab_tests: {
    path: '/lis.SampleService/sample_get_lab_tests',
    requestStream: false,
    responseStream: false,
    requestType: va$lis_pb.sample_id,
    responseType: va$lis_pb.sample_test_id,
    requestSerialize: serialize_lis_sample_id,
    requestDeserialize: deserialize_lis_sample_id,
    responseSerialize: serialize_lis_sample_test_id,
    responseDeserialize: deserialize_lis_sample_test_id,
  },
};

exports.SampleServiceClient = grpc.makeGenericClientConstructor(SampleServiceService);
