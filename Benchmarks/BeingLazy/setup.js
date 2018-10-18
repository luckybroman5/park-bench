module.exports = () => {
  // console.log('SETUP RUNNING'); 

  // To simulate the varables being accessed in the global scope
  const b = 5;

  // These get called for EVERY RECORD!!
  const detects = [
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
    (a) => a + b,
  ];

  // A static list different sizes of records
  const records = [];


}