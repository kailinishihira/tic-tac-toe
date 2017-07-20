
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

Board.prototype.checkWin = function() {
  // var row1Win = [];
  // for (var i = 0; i < 3; i++) {
  //   row1Win[i] = board.spaces[i].status;
  // }
  if (board.spaces[0].status === board.spaces[1].status && board.spaces[1].status === board.spaces[2].status) {
    winner = true;
  }
}


$(document).ready(function() {
  $("#1-1").click(function() {
    $("#1-1").text(board.spaces[0].mark());
    board.checkWin();
  });

  $("#1-2").click(function() {
    $("#1-2").text(board.spaces[1].mark());
    board.checkWin();
  });

  $("#1-3").click(function() {
    $("#1-3").text(board.spaces[2].mark());
    board.checkWin();
  });

  $("#2-1").click(function() {
    $("#2-1").text(board.spaces[3].mark());
  });

  $("#2-2").click(function() {
    $("#2-2").text(board.spaces[4].mark());
  });

  $("#2-3").click(function() {
    $("#2-3").text(board.spaces[5].mark());
  });

  $("#3-1").click(function() {
    $("#3-1").text(board.spaces[6].mark());
  });

  $("#3-2").click(function() {
    $("#3-2").text(board.spaces[7].mark());
  });

  $("#3-3").click(function() {
    $("#3-3").text(board.spaces[8].mark());
  });

});
