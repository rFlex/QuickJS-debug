function readFile(path) {
    const f = std.open(path, 'r');
    const content = f.readAsString();
    f.close();
    return content;
}

function resolvePath(path) {
  return path + '.js';
}

function require(path) {
  const file = readFile(resolvePath(path));
  const func = new Function('require', 'module', 'exports', file);

  const module = {};
  module.exports = {};

  func(require, module, module.exports);
  return module.exports;
}

function increaseSize(arr, count) {
  const out = [];

  while (out.length < count) {
    const itemIndex = Math.floor(Math.random() * arr.length);
    out.push(arr[itemIndex]);
  }

  return out;
}

function encodeUntilCrash(proto, result) {
  let currentSize = 100;
  let arr = result.story.envelope.slice();
  while (true) {
    result.story.envelope = increaseSize(arr, currentSize);
    console.log('Encoding with array of size', currentSize)
    const encoded = proto.impala.highlights.Highlight.encode(result);
    console.log('Decoding the result');
    proto.impala.highlights.Highlight.decode(encoded);
    currentSize = Math.floor(currentSize * 1.25);
    console.log('Performing GC...');
    std.gc();
  }
}

function main() {
  console.log('Reading payload');

  const Base64 = require('base64');

  const protoContent = readFile('payload_base64.txt');
  const byteArray = Base64.toByteArray(protoContent);

  console.log('Parsing proto file of size', byteArray.length);

  const proto = require('proto');

  const result = proto.impala.highlights.Highlight.decode(byteArray);

  console.log('Rasing proto size and encoding until it crashes');
  encodeUntilCrash(proto, result);
}

main();