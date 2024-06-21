const greetUser = (userName) => {
  console.log(`Hello, ${userName}`);
};

const greetWithSalutation = (saltutaion, userName) => {
  console.log(`Hello ${saltutaion}. ${userName}`);
};

const sayHi = () => {
  console.log("Hi There!");
};

// export default greetUser; // ESM
module.exports = {
  greetUser,
  greetWithSalutation,
  sayHi,
}; // CJS
