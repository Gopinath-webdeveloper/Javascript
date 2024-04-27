let display = document.getElementById("display");
// console.log(display.value);

let add = function (v) {
  console.log("add function called");

  //   let valuee = "";
  //   display.value = valuee;
  //   valuee = valuee + v;
  //   display.value = valuee;
  //
  //   display.value = valuee;

  display.value += v;

  console.log(display.value);
};

function evalate() {
  console.log("evalate function called");

  console.log(display.value);
  display.value = eval(display.value);
}

function reset() {
  console.log("reset function called");
  display.value = "";
}

function clrlast() {
  console.log("clear function called");
  del = display.value;
  // console.log(del);
  // console.log(del.length);
  // console.log(del.charAt(del.length - 1));
  let last = del.charAt(del.length - 1);

  if (del.includes(last)) {
    display.value = del.slice(0, del.length - 1);
    console.log(display.value);
  }
}
