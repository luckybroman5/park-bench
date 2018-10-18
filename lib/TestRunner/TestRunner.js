'use strict';

const fs = require('fs');
const os = require('os');
const Benchmark = require('benchmark');

// const runTest = (testName, input, testFn, variant) => {
//   suite.add(`${testName}`)
//   .on('cycle', function(event) {
//     console.log(String(event.target));
//   })
//   .on('complete', function() {
//     console.log('Fastest is ' + this.filter('fastest').map('name'));
//   })
//   // run async
//   .run({ 'async': true });
//   testFn(res);
// }

function onStart() {
  console.log(`
====================================================
Platform: ${os.platform()}
OS Release: ${os.release()}
OS Type: ${os.type()}
Arch: ${os.arch}
UV_UDP_REUSEADDR: ${os.constants.UV_UDP_REUSEADDR}
CPUS: ${JSON.stringify(os.cpus(), null, 1)}
Starting Free Memory: ${os.freemem} bytes
Starting OS TotalMem: ${os.totalmem()} bytes
Starting OS Uptime: ${os.uptime()} seconds
LoadAvg: ${os.loadavg()}
HostName: ${os.hostname}
====================================================
  `)
};

function onCycle(...args) {
  // console.log('this!!!!', this);
  console.log('I am Cyclin`!!');
};

function onAbort() {
//  console.log('this!!!!', this);
  console.log('WE NEED TO ABORT CAPTN`, We just aint`t gonna makie it... [SUITE ABORTED!!]')
};


function onError(event) {
  const err = event.target
  console.log('We encountered an error!', err)
  console.log('Offending Line:', event.target.compiled.toString());
};

function onReset() {
  console.log('SUIT RESET!');
}

function onComplete(...args) {
  console.log('COMPLETE!');
  this.forEach((bench) => {
    console.log(`------------------ ${bench.name} ${bench.id} ------------------`);
    console.log('MEAN: ', bench.stats.mean);
    console.log('HZ: ', bench.hz)
    console.log('COUNT: ', bench.count)
    console.log('ELAPSED: ', bench.times.elapsed);
    // console.log(JSON.stringify(bench, null, 2));
    console.log('\n')
  })
  const sorted = this.sort((a, b) => {
    console.log(b.name, ' compared to: ', a.name);
    const score = b.compare(a);
    console.log(score);
    return score;
  });
  // (Still Do not understand how this is derrived by benchmarkjs)
  console.log('--- LEADER BOARD ---');
  sorted.forEach((e, i)=> console.log(i+1, e.name));
};

function suiteFactory(testName, path, n = 10) {
  const setupFunc = require(`${path}/setup`);
  const variants = fs.readdirSync(`${path}/variants`).filter(s => s.match('.js'));
  const tests = require(`${path}/test`);
  const suite = new Benchmark.Suite(testName, {

    // called when the suite starts running
    // 'onStart': onStart,

    // called between running benchmarks
    'onCycle': onCycle,

    // called when aborted
    'onAbort': onAbort,

    // called when a test errors
    'onError': onError,

    // called when reset
    'onReset': onReset,

    // called when the suite completes running
    'onComplete': onComplete,

    // 'setup': setupFunc,

    // 'fn': require(`${path}/variants/${variants[0]}`),
  });
  variants.forEach((v, i) => suite.add({
    setup: setupFunc,
    fn: require(`${path}/variants/${v}`),
    name: v,
  }))
  // suite.add(`${testName}-${1}`, require(`${path}/variants/${variants[0]}`));
  // variants.forEach((v,i) => suite.add(`${testName}-${i}`, require(`${path}/variants/${v}`)));
  // variants.forEach((v,i) => console.log(`${testName}-${i}`));

  suite.options.minSamples = 10;

  // suite.on('cycle', function(event) {
  //   console.log(String(event.target));
  // })
  // .on('complete', function() {
  //   console.log('Fastest is ' + this.filter('fastest').map('name'));
  // })
  // run async
  suite.run({ 'async': false });

  return suite;
}

module.exports = (testName, path, maxn = 10000) => {
  console.log(process.cwd());
  onStart();

  // for(let n = 1; n < maxn; n ++) {
  //   suiteFactory(testName, path, maxn);
  // }

  suiteFactory(testName, path, maxn)

  // const setupFunc = require(`${path}/setup`);
  // const variants = fs.readdirSync(`${path}/variants`).filter(s => s.match('.js'));
  // const tests = require(`${path}/test`);
  // const suite = new Benchmark.Suite(testName, {

  //   // called when the suite starts running
  //   'onStart': onStart,

  //   // called between running benchmarks
  //   'onCycle': onCycle,

  //   // called when aborted
  //   'onAbort': onAbort,

  //   // called when a test errors
  //   'onError': onError,

  //   // called when reset
  //   'onReset': onReset,

  //   // called when the suite completes running
  //   'onComplete': onComplete,

  //   // 'setup': setupFunc,

  //   // 'fn': require(`${path}/variants/${variants[0]}`),
  // });
  // variants.forEach((v, i) => suite.add({
  //   setup: setupFunc,
  //   fn: require(`${path}/variants/${v}`),
  //   name: v,
  // }))
  // // suite.add(`${testName}-${1}`, require(`${path}/variants/${variants[0]}`));
  // // variants.forEach((v,i) => suite.add(`${testName}-${i}`, require(`${path}/variants/${v}`)));
  // // variants.forEach((v,i) => console.log(`${testName}-${i}`));

  // suite.options.minSamples = 10;

  // // suite.on('cycle', function(event) {
  // //   console.log(String(event.target));
  // // })
  // // .on('complete', function() {
  // //   console.log('Fastest is ' + this.filter('fastest').map('name'));
  // // })
  // // run async
  // suite.run({ 'async': false });

  // variants.forEach((v,i) => runTest(`${testName}-${i}`, input, tests, v));
};