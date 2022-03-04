import { ServerUnaryCall, sendUnaryData, ServerWritableStream, ServerReadableStream } from "grpc";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { IUsersServer } from "../proto/users_grpc_pb";
import { User, UserRequest } from "../proto/users_pb";
export declare class UsersServer implements IUsersServer {
    getUser(call: ServerUnaryCall<UserRequest>, callback: sendUnaryData<User>): void;
    getUsers(call: ServerWritableStream<Empty>): void;
    createUser(call: ServerReadableStream<Empty>, callback: sendUnaryData<Empty>): void;
}
