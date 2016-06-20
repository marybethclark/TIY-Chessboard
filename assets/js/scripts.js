
$(function(){
  'use strict';
});

// var board = [
//   ["r", "n"],
//   ["pl", "pr"],
//   [" "," "]
// ];
//
// console.log(board.join('\n') + '\n\n');
// board[2][0] = board[0][1];
// board[0][1] = ' ';
// console.log(board.join('\n'));

var row8 = $(".row8 .chess-piece");//div class called row8 that contains chess pieces
var row7 = $(".row7 .chess-piece");
var row6 = $(".row6 .chess-piece");
var row5 = $(".row5 .chess-piece");
var row4 = $(".row4 .chess-piece");
var row3 = $(".row3 .chess-piece");
var row2 = $(".row2 .chess-piece");
var row1 = $(".row1 .chess-piece");


var chessboard =[row8, row7, row6, row5, row4, row3, row2, row1];//array that contains all squares & pieces


var show1 = chessboard[6][3];
var empty1 = chessboard[4][3];

var show2 = chessboard[0][6];
var empty2 = chessboard[2][5];

var show3 = chessboard[6][2];
var empty3 = chessboard[4][2];

var show4 = chessboard[1][4];
var empty4 = chessboard[2][4];

var show5 = chessboard[6][6];
var empty5 = chessboard[5][6];

var show6 = chessboard[1][3];
var empty6 = chessboard[3][3];

var show7 = chessboard[7][5];
var empty7 = chessboard[6][6];

var show8 = chessboard [0][5];
var empty8 = chessboard [1][4];

var show9 = chessboard [7][6];
var empty9 = chessboard [5][5];

var counter = 0;//start our click counter at zero


// $.each(chessboard, function([i]){

$(".step-forward").on("click",function(){///when our button with the class of step-forward is clicked, run the following function
    counter++;//add one to the click counter each time a click happens
    if(counter === 1){
    console.log("move1");//HUH??  console log shows this BEFORE step-forward is clicked!
    function display(show1, empty1){//show1 & empty1 are the 2 parameters needed for this function named "display"
  $(chessboard[4][3]).append($(chessboard[6][3]).html());//looking in the chessboard array position 4,3, add to the html what was in position 6,3
  $(chessboard[6][3]).html(" ");//in position 6,3 replace it with a space
                                   }
                     }
  else{
    return false;
    // counter++;///I see a problem with using counter++.  This would make it look as if  move 2 had been clicked, since the click counter would register 2 clicks.
      }

    display(show1);
                                      });
    console.log("click1");//this is counting number of clicks in console correctly

// ///////////////////////////////////////////////////////////////////


  $(".step-forward").on("click",function(){
        counter++
        if(counter === 2){
    console.log("move2");
    function display(show2, empty2){
  $(chessboard[2][5]).append($(chessboard[0][6]).html());
  $(chessboard[0][6]).html(" ");
  }
}
  else{
    // counter++;
  }
    display(show2);
  });
    console.log("click 2");

///////////////////////////////////////////////////////////////
$(".step-back").on("click", function(){
  counter --;
  if(counter === 1){
  function display(show1, empty1){
    console.log("step-back has fired");
    $(chessboard[6][3]).append($(chessboard[4][3]).html());
    $(chessboard[4][3]).html(" ");
                                }

                            }
display(show1);
                                    });

//
// ////////ERIK'S CODE he suggested////////////////////
// // function move( piece, destination ) {
// //    console.log( "Piece: " + piece + "\nDestination: " + destination );
// //    $( destination ).append( $( piece ).html() );
// //    $( piece ).html( "" );
// //  }
//  ////////ERIK'S CODE he suggested////////////////////
//
// ////commented out for a test////////////
//     // var display = chessBoard[6][3];
//     // function display(show1, empty1){
//     //   $(this)[4][3].append($(this).html());
//     //   $(this)[6][3].html(" ");
//     // console.log()
//     //                                }
//
//
//   console.log("Wee!")
//                                           });
//
//     ////////////////////I was experimenting with a For Loop below////////
//     // $(".step-forward").each(function(i, chessboard){
//     // $(chessboard[4][3]).append($(chessboard[6][3]).html());
//     //     $(chessboard[6][3]).html(" ");
//     //     });
//     // });


//////////early explorations////////
// var board = [
//   ["r", "n"],
//   ["pl", "pr"],
//   [" "," "]
// ];
//
// console.log(board.join('\n') + '\n\n');
//
// board[2][0] = board[0][1];
// board[0][1] = ' ';
// console.log(board.join('\n'));
