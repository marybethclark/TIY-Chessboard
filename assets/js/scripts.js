
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
//
//
//
// board[2][0] = board[0][1];
// board[0][1] = ' ';
// console.log(board.join('\n'));

var row8 = $(".row8 .chess-piece");
var row7 = $(".row7 .chess-piece");
var row6 = $(".row6 .chess-piece");
var row5 = $(".row5 .chess-piece");
var row4 = $(".row4 .chess-piece");
var row3 = $(".row3 .chess-piece");
var row2 = $(".row2 .chess-piece");
var row1 = $(".row1 .chess-piece");


var chessboard =[row8, row7, row6, row5, row4, row3, row2, row1];


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

var counter = 0;


// $.each(chessboard, function([i]){

$(".step-forward").on("click",function(){///change click event listener move2.  i.e. ".play"
    counter++
    if(counter === 1){
    // if(counter === 1);
    console.log("move1");
    function display(show1, empty1){
  $(chessboard[4][3]).append($(chessboard[6][3]).html());
  $(chessboard[6][3]).html(" ");
  // $(chessboard[6][3]).remove();
}
    }
  else{
    return false;
    // counter++;
  }
    // else
      // return false;

    display(show1);
});
    console.log("click1");

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
// });
////////////////////////////////////////////////////
  // if(counter === 1){
  // }
    // counter++;
//    MOVE 1  //
    // var display = chessBoard[6][3];
    // function display(show1, empty1){
    //   console.log("move1");
    //   // console.log(show1);
    //   $(chessboard[4][3]).append($(chessboard[6][3]).html());
    //   $(chessboard[6][3]).html(" ");
    //
    // }

    // display(show1);
    // alert(chessboard[i]);


  // console.log("click has happen2");
// });


// $.each(chessboard, function( i, val){}

// $(".step-forward").on("click",function(){
//       counter++;
//       if(counter === 3){
//   console.log("move3");
//   function display(show3, empty3){
// $(chessboard[4][2]).append($(chessboard[6][2]).html());
// $(chessboard[6][2]).html(" ");
// }
// }
//   display(show3);
// });
//   console.log("click 3");
// // });
// ///////////////////////////////////////////////////////////////
//
// $(".step-forward").on("click",function(){
//       counter++;
//       if(counter === 4){
//   console.log("move4");
//   function display(show4, empty4){
// $(chessboard[2][4]).append($(chessboard[1][4]).html());
// $(chessboard[1][4]).html(" ");
// }
// }
//   display(show4);
// });
//   console.log("click 4");
// // });
// ///////////////////////////////////////////////////////////////
//
// $(".step-forward").on("click",function(){
//       counter++;
//       if(counter === 5){
//   console.log("move5");
//   function display(show5, empty5){
// $(chessboard[5][6]).append($(chessboard[6][6]).html());
// $(chessboard[06][6]).html(" ");
// }
// }
//   display(show6);
// });
//   console.log("click 6");
// // });
// ///////////////////////////////////////////////////////////////
//
// $(".step-forward").on("click",function(){
//       counter++;
//       if(counter === 6){
//   console.log("move6");
//   function display(show6, empty6){
// $(chessboard[3][3]).append($(chessboard[1][3]).html());
// $(chessboard[1][3]).html(" ");
// }
// }
//   display(show6);
// });
//   console.log("click 6");
// // });
// ///////////////////////////////////////////////////////////////
//
// $(".step-forward").on("click",function(){
//       counter++;
//       if(counter === 7){
//   console.log("move7");
//   function display(show7, empty7){
// $(chessboard[6][6]).append($(chessboard[7][5]).html());
// $(chessboard[7][5]).html(" ");
// }
// }
//   display(show7);
// });
//   console.log("click 7");
// // });
// ///////////////////////////////////////////////////////////////
//
// $(".step-forward").on("click",function(){
//       counter++;
//       if(counter === 8){
//   console.log("move8");
//   function display(show8, empty8){
// $(chessboard[1][4]).append($(chessboard[0][5]).html());
// $(chessboard[0][5]).html(" ");
//
// }
// }
//   display(show8);
// });
//   console.log("click 8");
// // });
//
//
// ///////////////////////////////////////////////////////////////
//
// $(".step-forward").on("click",function(){
//       counter++;
//       if(counter === 9){
//   console.log("move9");
//   function display(show9, empty9){
// $(chessboard[5][5]).append($(chessboard[7][6]).html());
// $(chessboard[7][6]).html(" ");
// }
// }
//   display(show9);
// });
//   console.log("click 9");
//
// /////////////////////////////////////////////////////////////
// var row8 = $("row8 .chess-piece");//div class called row8 that contains chess pieces
// var row7 = $("row7 .chess-piece");
// var row6 = $("row6 .chess-piece");
// var row5 = $("row5 .chess-piece");
// var row4 = $("row4 .chess-piece");
// var row3 = $("row3 .chess-piece");
// var row2 = $("row2 .chess-piece");
// var row1 = $("row1 .chess-piece");
//
//
// var chessboard =[row8, row7, row6, row5, row4, row3, row2, row1];//array that contains all squares & pieces
// //Question for Rhonda - Perhaps our var chessboard array should contain all 64 positions, like the demo code?
//
// var show1 = chessboard[6][3];//this specific position on chess board
// var empty1 = chessboard[4][3];
//
// var show2 = chessboard[0][6];
// var empty2 = chessboard[2][5];
//
// var show3 = chessboard[6][2];
// var empty3 = chessboard[4][2];
//
// var show4 = chessboard[1][4];
// var empty4 = chessboard[2][4];
//
// var show5 = chessboard[6][6];
// var empty5 = chessboard[5][6];
//
// var show6 = chessboard[1][3];
// var empty6 = chessboard[3][3];
//
// var show7 = chessboard[7][5];
// var empty7 = chessboard[6][6];
//
// var show8 = chessboard [0][5];
// var empty8 = chessboard [1][4];
//
// var show9 = chessboard [7][6];
// var empty9 = chessboard [5][5];
//
// var counter = 0;//start our click counter at zero
//
// $(".step-forward").on("click",function(){///when our button with the class of Step=forward is clicked, run the following function
//     counter++//add one to the click counter each time a click happens
//     if(counter == 1){//IF I CHANGE THE 1 to another number, console.log doesn't run until 2 clicks
//     console.log("one click has happened");//after one click, display "move1" in console
//     function display(){//show1 & empty1 are the 2 parameters needed for this function named "display"
//       $(chessboard[4][3]).append($(chessboard[6][3]).html());//looking in the chessboard array position 4,3, add what was in position 6,3
//       $(chessboard[6][3]).html(" ");//in array position 6,3 change the html to be a blank space
//   // $(chessboard[6][3]).remove();
//                       }
//                      }
//   else{
//     counter++;//if the click counter doesn't = 1, then add one to it
//   }////////////////I see a problem.  This would make it look as if  move 2 had been clicked, since the click counter would register 2 clicks.
//
// ////////ERIK'S CODE ////////////////////
// // function move( piece, destination ) {
// //    console.log( "Piece: " + piece + "\nDestination: " + destination );
// //    $( destination ).append( $( piece ).html() );
// //    $( piece ).html( "" );
// //  }
//  ////////ERIK'S CODE ////////////////////
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
//   console.log("Wee!")//this is counting number of clicks in console correctly
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
//
//
// board[2][0] = board[0][1];
// board[0][1] = ' ';
// console.log(board.join('\n'));
