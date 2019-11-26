set -e

SCRIPT_DIR=$(dirname "$0")

QUICK_JS_DIR="quickjs-2019-10-27"

cd $SCRIPT_DIR

cd $QUICK_JS_DIR && make qjs
cd -
cd $SCRIPT_DIR/js && ../$QUICK_JS_DIR/qjs --std index.js
