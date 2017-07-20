
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

//   event.preventDefault();
//   $("#1-1").text("");
//   $("#1-2").text("");
//   $("#1-3").text("");
//   $("#2-1").text("");
//   $("#2-2").text("");
//   $("#2-3").text("");
//   $("#3-1").text("");
//   $("#3-2").text("");
//   $("#3-3").text("");
//   $("#1-1").prop("disabled", false);
//   $("#1-2").prop("disabled", false);
//   $("#1-3").prop("disabled", false);
//   $("#2-1").prop("disabled", false);
//   $("#2-2").prop("disabled", false);
//   $("#2-3").prop("disabled", false);
//   $("#3-1").prop("disabled", false);
//   $("#3-2").prop("disabled", false);
//   $("#3-3").prop("disabled", false);
//   $("#winner").text("");
//   $("#play-again").hide();

var player1 = new Player(1, "Kirby");
var player2 = new Player(2, "Meta Knight");
var xTurn = true;
var board = new Board([[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]]);
var winner = "none";
var count = 0;

Space.prototype.mark = function() {
  if (xTurn) {
    xTurn = false;
    this.status = player1.markType;
    return '<img src="../tic-tac-toe/img/Kirby.png" width="90px" height="90px"/>';
  } else {
    xTurn = true;
    this.status = player2.markType;
    return '<img src="../tic-tac-toe/img/metaknight.png" width="90px" height="90px"/>';
  }
}

var counter = function() {
  count++;
  if (count === 9 && winner === "none") {
    $("#winner").text("Nobody wins.  ");
    $("#winner").append('<img src="../tic-tac-toe/img/nobodywins.png"/>');
    $("form#play-again").show();
  }
}

var isWinner = function() {
  $("#winner").text(winner + " is the winner!  ");
  if (winner === player1.markType) {
    $("#winner").append('<img src="../tic-tac-toe/img/kirbywin.png" width="90px" height="90px"/>');
  } else {
    $("#winner").append('<img src="../tic-tac-toe/img/metaknightwinner.png" width="90px" height="90px"/>');
  }
  $("form#play-again").show();
  $("td").off("click");
}

Board.prototype.checkWinRow1 = function() {
  if (board.spaces[0].status === board.spaces[1].status && board.spaces[1].status === board.spaces[2].status) {
    winner = board.spaces[0].status;
    isWinner();
  }
}

Board.prototype.checkWinRow2 = function() {
  if (board.spaces[3].status === board.spaces[4].status && board.spaces[3].status === board.spaces[5].status) {
    winner = board.spaces[3].status;
    isWinner();
  }
}

Board.prototype.checkWinRow3 = function() {
  if (board.spaces[6].status === board.spaces[7].status && board.spaces[6].status === board.spaces[8].status) {
    winner = board.spaces[6].status;
    isWinner();
  }
}

Board.prototype.checkWinColumn1 = function() {
  if (board.spaces[0].status === board.spaces[3].status && board.spaces[0].status === board.spaces[6].status) {
    winner = board.spaces[0].status;
    isWinner();
  }
}

Board.prototype.checkWinColumn2 = function() {
  if (board.spaces[1].status === board.spaces[4].status && board.spaces[1].status === board.spaces[7].status) {
    winner = board.spaces[1].status;
    isWinner();
  }
}

Board.prototype.checkWinColumn3 = function() {
  if (board.spaces[2].status === board.spaces[5].status && board.spaces[2].status === board.spaces[8].status) {
    winner = board.spaces[2].status;
    isWinner();
  }
}

Board.prototype.checkWinDiagonal1 = function() {
  if (board.spaces[0].status === board.spaces[4].status && board.spaces[0].status === board.spaces[8].status) {
    winner = board.spaces[0].status;
    isWinner();
  }
}

Board.prototype.checkWinDiagonal2 = function() {
  if (board.spaces[2].status === board.spaces[4].status && board.spaces[2].status === board.spaces[6].status) {
    winner = board.spaces[2].status;
    isWinner();
  }
}

$(document).ready(function() {
  $("#1-1").click(function() {
    $("#1-1").text("");
    $("#1-1").append(board.spaces[0].mark());
    board.checkWinRow1();
    board.checkWinColumn1();
    board.checkWinDiagonal1();
    $("#1-1").off("click");
    counter();
  });

  $("#1-2").click(function() {
    $("#1-2").text("");
    $("#1-2").append(board.spaces[1].mark());
    board.checkWinRow1();
    board.checkWinColumn2();
    $("#1-2").off("click");
    counter();
  });

  $("#1-3").click(function() {
    $("#1-3").text("");
    $("#1-3").append(board.spaces[2].mark());
    board.checkWinRow1();
    board.checkWinColumn3();
    board.checkWinDiagonal2();
    $("#1-3").off("click");
    counter();
  });

  $("#2-1").click(function() {
    $("#2-1").text("");
    $("#2-1").append(board.spaces[3].mark());
    board.checkWinRow2();
    board.checkWinColumn1();
    $("#2-1").off("click");
    counter();
  });

  $("#2-2").click(function() {
    $("#2-2").text("");
    $("#2-2").append(board.spaces[4].mark());
    board.checkWinRow2();
    board.checkWinColumn2();
    board.checkWinDiagonal1();
    board.checkWinDiagonal2();
    $("#2-2").off("click");
    counter();
  });

  $("#2-3").click(function() {
    $("#2-3").text("");
    $("#2-3").append(board.spaces[5].mark());
    board.checkWinRow2();
    board.checkWinColumn3();
    $("#2-3").off("click");
    counter();
  });

  $("#3-1").click(function() {
    $("#3-1").text("");
    $("#3-1").append(board.spaces[6].mark());
    board.checkWinRow3();
    board.checkWinColumn1();
    board.checkWinDiagonal2();
    $("#3-1").off("click");
    counter();
  });

  $("#3-2").click(function() {
    $("#3-2").text("");
    $("#3-2").append(board.spaces[7].mark());
    board.checkWinRow3();
    board.checkWinColumn2();
    $("#3-2").off("click");
    counter();
  });

  $("#3-3").click(function() {
    $("#3-3").text("");
    $("#3-3").append(board.spaces[8].mark());
    board.checkWinRow3();
    board.checkWinColumn3();
    board.checkWinDiagonal1();
    $("#3-3").off("click");
    counter();
  });
});
