/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  var solutionBoard = board.rows();
  //create var for representing rows of border
  for (var i = 0; i < solutionBoard.length; i++) {
    for (var j = 0; j < solutionBoard.length; j++) {
      solutionBoard[i][j] = 1;
      if (board.hasAnyRooksConflicts()) {
        solutionBoard[i][j] = 0;
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutionBoard));
  return solutionBoard;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n});
  var solutionBoard = board.rows();
  var solutionCount = 0;
  var countRooks = function(colIndex) {
    if (colIndex === solutionBoard.length) {
      solutionCount++;
    }
    for (var i = 0; i < solutionBoard.length; i++) {
      solutionBoard[i][colIndex] = 1;
      if (!board.hasAnyRooksConflicts()) {
        countRooks(colIndex + 1);
      }
      solutionBoard[i][colIndex] = 0;
    }
  };
  countRooks(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({'n': n});
  var solution = board.rows();
  //create var for representing rows of border
  for (var i = 0; i < solution.length; i++) {
    for (var j = 0; j < solution.length; j++) {
      solution[i][j] = 1;
      if (board.hasAnyQueensConflicts()) {
        solution[i][j] = 0;
      }
    }
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
