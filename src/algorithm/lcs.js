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

function lcs(text1, text2) {
  if (!text1 || !text2) return 0;

  let m = text1.length;
  let n = text2.length;

  let grid = new Array(m + 1);

  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(n + 1).fill(0);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (text1[i] === text2[j]) {
        grid[i + 1][j + 1] = grid[i][j] + 1;
      } else {
        grid[i + 1][j + 1] = Math.max(grid[i][j + 1], grid[i + 1][j]);
      }
    }
  }
  return grid;
}

function printDifference(grid, text1, text2, i, j) {
  console.log("i: ", i);
  console.log("j: ", j);
  if (i > 0 && j > 0 && text1[i - 1] === text2[j - 1]) {
    printDifference(grid, text1, text2, i - 1, j - 1);
    console.log(" " + text1[i - 1]);
  } else {
    if (j > 0 && (i === 0 || grid[i][j - 1] >= grid[i - 1][j])) {
      printDifference(grid, text1, text2, i, j - 1);
    } else if (i > 0 && (j === 0 || grid[i][j - 1] < grid[i - 1][j])) {
      printDifference(grid, text1, text2, i - 1, j);
      console.log("- " + text1[i - 1]);
    }
  }
}

let X = "martin loves to code";
let Y = "martin hates to code";
let m = X.length;
let n = Y.length;

let res = lcs(X, Y);
printDifference(res, X, Y, m, n);
