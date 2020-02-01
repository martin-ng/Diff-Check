// function lcs(str1, str2) {
//     let m = str1.length
//     let n = str2.length

//     let arr =
// }

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
  //   console.log(grid);
  return grid;
}

// recursively prints the differences

function printDifference(grid, text1, text2, i, j) {
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

// let X = "martin loves";
// let Y = "martin hates";

let X = [
  "This part of the document has stayed",
  "the same from version to version.",
  "",
  "This paragraph contains text that is",
  "outdated - it will be deprecated '''and'''",
  "deleted '''in''' the near future.",
  "",
  "It is important to spell check this",
  "dokument. On the other hand, a misspelled",
  "word isn't the end of the world."
];

let Y = [
  "This is an important notice! It should",
  "therefore be located at the beginning of",
  "this document!",
  "",
  "This part of the document has stayed",
  "the same from version to version.",
  "",
  "It is important to spell check this",
  "document. On the other hand, a misspelled",
  "word isn't the end of the world. This",
  "paragraph contains important new",
  "additions to this document."
];

let m = X.length;
let n = Y.length;

let C = lcs(X, Y);
// console.log(C);
console.log(printDifference(C, X, Y, m, n));
