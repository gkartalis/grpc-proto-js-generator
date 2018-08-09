# gprc-proto-js-generator

> This repo generates the Javascript code from a .proto file
> It consists of a previous version of **ts-protoc-gen** npm package that supported JS code generation from a .proto file.
> In the latest version of this package only TypeScript code generation is available.

## Instructions to auto - generate JS code from .proto file

1. git clone git@github.com:gkartalis/grpc-proto-js-generator.git
2. cd grpc-proto-js-generator && npm i
3. cp ${Your .proto path location} proto/ 
   to copy the proto file inside proto folder
4. npm run proto
5. inside js-proto-generator/src/proto you'll find the javascript generated files
