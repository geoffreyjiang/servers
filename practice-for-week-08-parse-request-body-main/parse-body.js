function firstStep(input) {
  return input.split("&");
}

function secondStep(input) {
  return input.map((el) => {
    return el.split("=");
  });
}

function thirdStep(input) {
  let result = [];
  input.forEach((el) => {
    let res = el.map((el2) => {
      return el2.replace("+", " ");
    });
    result.push(res);
  });
  return result;
}

function fourthStep(input) {
  let result = [];
  input.forEach((el) => {
    let res = el.map((el2) => {
      return decodeURIComponent(el2);
    });
    result.push(res);
  });
  return result;
}

function fifthStep(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    let arr = input[i];
    let key = arr[0];
    let val = arr[1];
    obj[key] = val;
  }
  return obj;
}

function parseBody(str) {
  let first = firstStep(str);
  let second = secondStep(first);
  let third = thirdStep(second);
  let fourth = fourthStep(third);
  let fifth = fifthStep(fourth);
  return fifth;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};
