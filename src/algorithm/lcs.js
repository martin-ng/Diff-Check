// function sentenceCheck(textOne, textTwo) {
//   let arrOne = textOne.split(" ");
//   let arrTwo = textTwo.split(" ");

//   let different = false;

//   console.log(arrOne);
//   //   lcs(arrOne, arrTwo);
// }

// This function logs what was deleted and what was added afterwards

function findDiff(beforeText, afterText) {
  let beforeMap = {};

  for (let i = 0; i < beforeText.length; i++) {
    beforeMap[beforeText[i]] = beforeMap[beforeText[i]] || [];
    beforeMap[beforeText[i]].push(i);
  }

  let overlap = [];
  let startNew, startOld, subLength, idxNew;
  startNew = startOld = subLength = 0;

  for (idxNew = 0; idxNew < afterText.length; idxNew++) {
    let overlapItems = [];
    beforeMap[afterText[idxNew]] = beforeMap[afterText[idxNew]] || [];
    for (let i = 0; i < beforeMap[afterText[idxNew]].length; i++) {
      let idxOld = beforeMap[afterText[idxNew]][i];

      overlapItems[idxOld] = ((idxOld && overlap[idxOld - 1]) || 0) + 1;
      if (overlapItems[idxOld] > subLength) {
        subLength = overlapItems[idxOld];
        startOld = idxOld - subLength + 1;
        startNew = idxNew - subLength + 1;
      }
    }
    overlap = overlapItems;
  }

  if (subLength === 0) {
    let result = [];
    beforeText.length && result.push(["-", beforeText]);
    afterText.length && result.push(["+", afterText]);
    return result;
  }

  return [].concat(
    findDiff(beforeText.slice(0, startOld), afterText.slice(0, startNew)),
    [["=", afterText.slice(startNew, startNew + subLength)]],
    findDiff(
      beforeText.slice(startOld + subLength),
      afterText.slice(startNew + subLength)
    )
  );
}

// function lcs(text1, text2) {
//   if (!text1 || !text2) return 0;

//   let grid = new Array(text2.length + 1);

//   for (let i = 0; i < grid.length; i++) {
//     grid[i] = new Array(text1.length + 1).fill(0);
//   }

//   for (let i = 0; i < text2.length; i++) {
//     for (let j = 0; j < text1.length; j++) {
//       if (text2[i] === text1[j]) {
//         grid[i + 1][j + 1] = grid[i][j] + 1;
//       } else {
//         grid[i + 1][j + 1] = Math.max(grid[i][j + 1], grid[i + 1][j]);
//       }
//     }
//   }

//   return grid;
// }

// function lcsTwo(str1, str2) {
//   var result = [];
//   for (var i = -1; i < str1.length; i = i + 1) {
//     result[i] = [];
//     for (var j = -1; j < str2.length; j = j + 1) {
//       if (i === -1 || j === -1) {
//         result[i][j] = 0;
//       } else if (str1[i] === str2[j]) {
//         result[i][j] = result[i - 1][j - 1] + 1;
//       } else {
//         result[i][j] = Math.max(result[i - 1][j], result[i][j - 1]);
//       }
//     }
//   }
//   return result;
// }

// function getLcs(str1, str2, i, j) {
//   let arr = [];
//   if (i === 0 || j === 0) {
//     return "";
//   } else if (str1[i - 1] === str2[j - 1]) {
//     return getLcs(str1, str2, i - 1, j - 1) + str1[i - 1];
//   } else if (arr[(i, j - 1)] > arr[(i - 1, j)]) {
//     return getLcs(str1, str2, i, j - 1);
//   } else {
//     return getLcs(str1, str2, i - 1, j);
//   }
// }

function getLcs(str1, str2, lcsLengthsMatrix) {
  var execute = function(i, j) {
    if (!lcsLengthsMatrix[i][j]) {
      return "";
    } else if (str1[i] === str2[j]) {
      return execute(i - 1, j - 1) + str1[i];
    } else if (lcsLengthsMatrix[i][j - 1] > lcsLengthsMatrix[i - 1][j]) {
      return execute(i, j - 1);
    } else {
      return execute(i - 1, j);
    }
  };
  return execute(str1.length - 1, str2.length - 1);
}

// return function (str1, str2) {
//   var lcsLengthsMatrix = getLcsLengths(str1, str2);
//   return getLcs(str1, str2, lcsLengthsMatrix);
// };
// })();
let str1 = " martin loves to code";
let str2 = " martin hates to code";
// let str1 = "abcd";
// let str2 = "axxcda";
// let str1 = "martin";
// let str2 = "martin";

// let lcsLengths = lcs(str1, str2);
// let lcsLengths = lcs(str1, str2);
// console.log(lcsLengths);
// let getLcsVar = getLcs(str1, str2, str1.length, str2.length);
let getLcsVar = getLcs(str1, str2, lcsTwo);

let diff = findDiff(str1, str2);
console.log("getLcsVar: ", getLcsVar);
console.log(diff);
console.log("lcs: ", lcs(str1, str2));
console.log("lcsTwo: ", lcsTwo(str1, str2));
// console.log("getLcs: ", getLcs);
// let lcsLengths = lcs("tim", "time");
// console.log(lcsLengths);
