const testRunner = require('./lib/TestRunner/TestRunner');

// testRunner('BubbleSort', '/home/kade/code/park-bench/Benchmarks/Calibration'); 
// testRunner('Gatekeeper', '/home/kade/code/park-bench/Benchmarks/Gatekeeper'); 

// testRunner('Calibration', '/home/kade/code/park-bench/Benchmarks/Calibration'); 

testRunner('Dedupe', `${process.cwd()}/Benchmarks/Dedupe`);


// testRunner('Differ', `${process.cwd()}/Benchmarks/Differ`);

// testRunner('JSON-Stringify', '/home/kade/code/park-bench/Benchmarks/JSON-Stringify');