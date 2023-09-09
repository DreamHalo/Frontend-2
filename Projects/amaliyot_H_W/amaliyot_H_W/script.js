// in1020

// function in1020(a, b) {
//   return (a >= 10 && a <= 20) || (b >= 10 && b <= 20);
// }



// hasTeen

// function hasTeen(a, b, c) {
//   return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19);
// }



// loneTeen

// function loneTeen(a, b) {
//   const a_Teen = a >= 13 && a <= 19;
//   const b_Teen = b >= 13 && b <= 19;
//   return (a_Teen && !b_Teen) || (!a_Teen && b_Teen);
// }




// delDel


// function delDel(str) {
//   if (str.length >= 4 && str[1] === "d" && str[2] === "e" && str[3] === "l") {
//     return str[0] + str.slice(4);
//   } else {
//     return str;
//   }
// }




// mixStart

// function mixStart(str) {
//   if (str.length < 3) {
//     return false;
//   }

//   return str[1] === "i" && str[2] === "x";
// }




// startOz

// function startOz(str) {
//   var natija = "";

//   if (str.length >= 1 && str[0] === "o") {
//     natija += "o";
//   }

//   if (str.length >= 2 && str[1] === "z") {
//     natija += "z";
//   }

//   return natija;
// }




// intMax

// function intMax(a, b, c) {
//   var max = a;

//   if (b > max) {
//     max = b;
//   }

//   if (c > max) {
//     max = c;
//   }

//   return max;
// }




// close10

// function close10(a, b) {
//   var nimaA = Math.abs(a - 10);
//   var nimaB = Math.abs(b - 10);

//   if (nimaA < nimaB) {
//     return a;
//   } else if (nimaB < nimaA) {
//     return b;
//   } else {
//     return 0;
//   }
// }





//  in3050

// function in3050(a, b) {
//   var salom1 = a >= 30 && a <= 40 && b >= 30 && b <= 40;
//   var salom2 = a >= 40 && a <= 50 && b >= 40 && b <= 50;
//   return salom1 || salom2;
// }




//  max1020

// function max1020(a, b) {
//   if (a >= 10 && a <= 20 && b >= 10 && b <= 20) {
//     return Math.max(a, b);
//   } else if (a >= 10 && a <= 20) {
//     return a;
//   } else if (b >= 10 && b <= 20) {
//     return b;
//   } else {
//     return 0;
//   }
// }




//  stringE

// function stringE(str) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === "e") {
//       count++;
//     }
//   }
//   return count >= 1 && count <= 3;
// }




// lastDigit

// function lastDigit(a, b) {
//   return a % 10 === b % 10;
// }





// endUp

// function endUp(str) {
//   if (str.length < 3) {
//     return str.toUpperCase();
//   } else {
//     var natija = "";
//     var uppercaseCount = 0;

//     for (var i = str.length - 1; i >= 0; i--) {
//       var currentChar = str.charAt(i);

//       if (uppercaseCount < 3) {
//         natija = currentChar.toUpperCase() + natija;
//         uppercaseCount++;
//       } else {
//         natija = currentChar + natija;
//       }
//     }

//     return natija;
//   }
// }





// everyNth

// function everyNth(str, N) {
//   var natija = "";

//   for (var i = 0; i < str.length; i += N) {
//     natija += str.charAt(i);
//   }

//   return natija;
// }



// ez