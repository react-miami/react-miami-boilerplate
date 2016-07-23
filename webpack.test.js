const testContext = require.context('./test', true, /\Spec.js$/);
testContext.keys().forEach(testContext);

// var srcContext = require.context('./src', true, /\.js$/);
// srcContext.keys().forEach(srcContext);
