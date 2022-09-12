// Complete this function to return either
// "Hello, [name]!" or "Hello there!"
// based on the input
// on qualified Practice name = "Qualified"

const sayHello = (name) => {
  var greeting = "Hello, ";
  var blankInput = "Hello there!";

  if (name === "") {
    return blankInput;
  } else {
    return greeting + name + "!";
  }
};

console.log(sayHello());
