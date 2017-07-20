
function Player(name, markType) {
  this.name = name;
  this.markType = markType;
}

function Space(coordinates, currentMark) {
  this.coordinates = coordinates;
  this.x = coordinates[0];
  this.y = coordinates[1];
  this.status = currentMark;
}

function Board(spaceArray) {
  this.spaces = [];
  for (var i = 0; i < spaceArray.length; i++) {
    this.spaces[i] = new Space(spaceArray[i], "");
  }
}
/*
function Game() {
  this.board = new Board([[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]]);
  this.player1 = new Player(1, X);
  this.player2 = new Player(2, O);
  this.turn = true;
  this.gameOver = false;
}
*/

var player1 = new Player(1, "X");
var player2 = new Player(2, "O");
var xTurn = true;
var board = new Board([[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]]);
var winner = false;

Space.prototype.mark = function() {
  if (xTurn) {
    xTurn = false;
    this.status = player1.markType;
    return this.status;
  } else {
    xTurn = true;
    this.status = player2.markType;
    return this.status;
  }
}

Board.prototype.checkWinRow1 = function() {
  // var row1Win = [];
  // for (var i = 0; i < 3; i++) {
  //   row1Win[i] = board.spaces[i].status;
  // }
  if (board.spaces[0].status === board.spaces[1].status && board.spaces[1].status === board.spaces[2].status) {
    winner = true;
  }
}

Board.prototype.checkWinRow2 = function() {
  if (board.spaces[3].status === board.spaces[4].status && board.spaces[3].status === board.spaces[5].status) {
    winner = true;
  }
}

Board.prototype.checkWinRow3 = function() {
  if (board.spaces[6].status === board.spaces[7].status && board.spaces[6].status === board.spaces[8].status) {
    winner = true;
  }
}

Board.prototype.checkWinColumn1 = function() {
  if (board.spaces[0].status === board.spaces[3].status && board.spaces[0].status === board.spaces[6].status) {
    winner = true;
  }
}

Board.prototype.checkWinColumn2 = function() {
  if (board.spaces[1].status === board.spaces[4].status && board.spaces[1].status === board.spaces[7].status) {
    winner = true;
  }
}

Board.prototype.checkWinColumn3 = function() {
  if (board.spaces[2].status === board.spaces[5].status && board.spaces[2].status === board.spaces[8].status) {
    winner = true;
  }
}

$(document).ready(function() {
  $("#1-1").click(function() {
    $("#1-1").text(board.spaces[0].mark());
    board.checkWinRow1();
    board.checkWinColumn1();
  });

  $("#1-2").click(function() {
    $("#1-2").text(board.spaces[1].mark());
    board.checkWinRow1();
    board.checkWinColumn2();
  });

  $("#1-3").click(function() {
    $("#1-3").text(board.spaces[2].mark());
    board.checkWinRow1();
    board.checkWinColumn3();
  });

  $("#2-1").click(function() {
    $("#2-1").text(board.spaces[3].mark());
    board.checkWinRow2();
    board.checkWinColumn1();
  });

  $("#2-2").click(function() {
    $("#2-2").text(board.spaces[4].mark());
    board.checkWinRow2();
    board.checkWinColumn2();
  });

  $("#2-3").click(function() {
    $("#2-3").text(board.spaces[5].mark());
    board.checkWinRow2();
    board.checkWinColumn3();
  });

  $("#3-1").click(function() {
    $("#3-1").text(board.spaces[6].mark());
    board.checkWinRow3();
    board.checkWinColumn1();
  });

  $("#3-2").click(function() {
    $("#3-2").text(board.spaces[7].mark());
    board.checkWinRow3();
    board.checkWinColumn2();
  });

  $("#3-3").click(function() {
    $("#3-3").text(board.spaces[8].mark());
    board.checkWinRow3();
    board.checkWinColumn3();
  });

});
