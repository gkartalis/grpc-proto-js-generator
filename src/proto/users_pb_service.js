// package: users
// file: proto/users.proto

var jspb = require("google-protobuf");
var proto_users_pb = require("../proto/users_pb");
var Users = {
  serviceName: "users.Users"
};
Users.GetUserAvatar = {
  methodName: "GetUserAvatar",
  service: Users,
  requestStream: false,
  responseStream: false,
  requestType: proto_users_pb.UserRequest,
  responseType: proto_users_pb.Avatar
};
Users.GetUserName = {
  methodName: "GetUserName",
  service: Users,
  requestStream: false,
  responseStream: false,
  requestType: proto_users_pb.UserRequest,
  responseType: proto_users_pb.Name
};
module.exports = {
  Users: Users,
};

