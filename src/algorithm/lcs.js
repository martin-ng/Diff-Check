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
//   console.log(grid);
//   //   return grid[text2.length][text1.length];
// }

// sentenceCheck("hi cindy ", "hi martin ");
// lcs("tim", "time");