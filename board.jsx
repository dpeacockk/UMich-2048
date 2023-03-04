import React, { useState, useEffect } from "react";
//import "./styles.css";
import img2 from "./img/2.jpeg"
import img4 from "./img/4.jpeg"
import img8 from "./img/8.jpeg"
import img16 from "./img/16.jpeg"
import img32 from "./img/32.jpeg"
import img64 from "./img/64.jpeg"
import img128 from "./img/128.jpeg"
import img256 from "./img/256.jpeg"
import img512 from "./img/512.jpeg"
import img1024 from "./img/1024.jpeg"
import img2048 from "./img/2048.jpeg"


function Board() {
    let init_rows = [[0,0,0,0], [0,0,0,0], [0,0,0,2], [0,2,0,0]];
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(init_rows);


    //Handles arrowkeydown event
    function keyPress(e){
        e.preventDefault();
        if (e.key === "ArrowUp") {
            updateBoard("ArrowUp");
          } else if (e.key === "ArrowDown") {
            updateBoard("ArrowDown");
          } else if (e.key === "ArrowLeft") {
            updateBoard("ArrowLeft");
          } else if (e.key === "ArrowRight") {
            updateBoard("ArrowRight");
          }
    }//keyPress()


    //Makes it so keypress activates only once
    useEffect(() =>{
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);


    function get_img(val){
        if(val === 2){
            return img2;
        } else if (val === 4){
            return img4;
        } else if (val === 8){
            return img8;
        } else if (val === 16){
            return img16;
        } else if (val === 32){
            return img32;
        } else if (val === 64){
            return img64;
        } else if (val === 128){
            return img128;
        } else if (val === 256){
            return img256;
        } else if (val === 512){
            return img512;
        } else if (val === 1024){
            return img1024;
        }
        return img2048;
    }//get_img()

    function renderBoard(){
        return(<div>
            {rows.map((row, key)=>(
                <div key={key} className="row">
                    {row.map((val, key2)=>(
                        <div key={key2} className="tile">
                            {val !== 0 ? <img className="pic" src={get_img(val)}/> : ""}
                        </div>
                    ))}
                </div>
            ))}
        </div>
        );
    }//renderBoard()


    //combines tiles and put them in the correct spot
    function combine_row(board, scre, dir){
        for(let i = 0; i < 4; ++i){
            if(dir === "ArrowLeft")
            {if(board[i][0] === board[i][1]){
                scre += board[i][0] + board[i][1]
                board[i][0] += board[i][1];
                board[i][1] = 0;
            } 
            if(board[i][1] === board[i][2]){
                scre += board[i][1] + board[i][2]
                board[i][1] += board[i][2];
                board[i][2] = 0;
            } 
            if(board[i][2] === board[i][3]){
                scre += board[i][2] + board[i][3]
                board[i][2] += board[i][3];
                board[i][3] = 0;
            } }// if (left)
            else{
                if(board[i][0] === board[i][1]){
                    scre += board[i][0] + board[i][1]
                    board[i][1] += board[i][0];
                    board[i][0] = 0;
                } 
                if(board[i][1] === board[i][2]){
                    scre += board[i][1] + board[i][2]
                    board[i][2] += board[i][1];
                    board[i][1] = 0;
                } 
                if(board[i][2] === board[i][3]){
                    scre += board[i][2] + board[i][3]
                    board[i][3] += board[i][2];
                    board[i][2] = 0;
                }
            }//else (right)
        }//for
        return [board, scre];
    }//combine_row()


    function combine_column(board, scre, dir){
        for(let i = 0; i < 4; ++i){
            if(dir === "ArrowUp")
                {if(board[0][i] === board[1][i]){
                    scre += board[0][i] + board[1][i]
                    board[0][i] += board[1][i];
                    board[1][i] = 0;
                } 
                if(board[1][i] === board[2][i]){
                    scre += board[1][i] + board[2][i]
                    board[1][i] += board[2][i];
                    board[2][i] = 0;
                } 
                if (board[2][i] === board[3][i]){
                    scre += board[2][i] + board[3][i]
                    board[2][i] += board[3][i];
                    board[3][i] = 0;
                }} // if (up)
            else{
                if(board[0][i] === board[1][i]){
                    scre += board[0][i] + board[1][i]
                    board[1][i] += board[0][i];
                    board[0][i] = 0;
                } 
                if(board[1][i] === board[2][i]){
                    scre += board[1][i] + board[2][i]
                    board[2][i] += board[1][i];
                    board[1][i] = 0;
                } 
                if (board[2][i] === board[3][i]){
                    scre += board[2][i] + board[3][i]
                    board[3][i] += board[2][i];
                    board[2][i] = 0;
                }
            } //else (down)
        }//for
        return [board, scre];
    }//combine_column()


    function moveLeft(board){
        var nwRows = [];
        for(let i = 0; i < 4; ++i){
            let filtered_row = board[i].filter(num => num);
            let num_zeroes = 4 - filtered_row.length;
            let zero_row = Array(num_zeroes).fill(0);
            let nwRow = filtered_row.concat(zero_row);
            nwRows = nwRows.concat([nwRow]);
        }//for
        return nwRows;
    }//moveLeft()


    function moveRight(board){
        var nwRows = [];
        for(let i = 0; i < 4; ++i){
            let filtered_row = board[i].filter(num => num);
            let num_zeroes = 4 - filtered_row.length;
            let zero_row = Array(num_zeroes).fill(0);
            let nwRow = zero_row.concat(filtered_row);
            nwRows = nwRows.concat([nwRow]);
        }//for
        return nwRows;
    }//moveRight()
    

    function moveUp(board){
        var newCols = [];
        for(let i = 0; i < 4; ++i){
            let col = [board[0][i], board[1][i], board[2][i],board[3][i]];
            let filtered_col = col.filter(num => num);
            let num_zeroes = 4 - filtered_col.length;
            let zero_col = Array(num_zeroes).fill(0);
            let newCol = filtered_col.concat(zero_col);
            newCols = newCols.concat([newCol]);
        }//for
        let newRows = [
            [newCols[0][0], newCols[1][0], newCols[2][0], newCols[3][0]],
            [newCols[0][1], newCols[1][1], newCols[2][1], newCols[3][1]],
            [newCols[0][2], newCols[1][2], newCols[2][2], newCols[3][2]],
            [newCols[0][3], newCols[1][3], newCols[2][3], newCols[3][3]]
        ];
        return newRows;
    }//moveUp()


    function moveDown(board){
        var newCols = [];
        for(let i = 0; i < 4; ++i){
            let col = [board[0][i], board[1][i], board[2][i],board[3][i]];
            let filtered_col = col.filter(num => num);
            let num_zeroes = 4 - filtered_col.length;
            let zero_col = Array(num_zeroes).fill(0);
            let newCol = zero_col.concat(filtered_col);
            newCols = newCols.concat([newCol]);
        }//for
        let newRows = [
            [newCols[0][0], newCols[1][0], newCols[2][0], newCols[3][0]],
            [newCols[0][1], newCols[1][1], newCols[2][1], newCols[3][1]],
            [newCols[0][2], newCols[1][2], newCols[2][2], newCols[3][2]],
            [newCols[0][3], newCols[1][3], newCols[2][3], newCols[3][3]]
        ];
        return newRows;
    }//moveDown()


    //Generates new 2 or 4 in unoccupied location
    function generate_new(board){
        let x = [Math.floor(Math.random()*4), Math.floor(Math.random()*4)];
        if(board[x[0]][x[1]] === 0){
            let newRow = board;
            let newNum = Math.ceil((Math.random()*2))*2;
            newRow[x[0]][x[1]] = newNum;
            return newRow;
        }//if
        else{return generate_new(board);}
    }//generate_new()


    function need_update(former, latter){
        for(let i = 0; i < 4; ++i){
            for(let j = 0; j < 4; ++j){
                if(former[i][j] !== latter[i][j]){
                    return true;
                }
            }//for
        }//for
        return false;
    }//need_update()


    // Main function to update game board
    function updateBoard(direction){
        var newBoard = [...rows];
        var oldBoard = [...rows];
        var newScore = score;
        if(direction == "ArrowUp"){
            newBoard = moveUp(newBoard);
            [newBoard, newScore] = combine_column(newBoard, newScore, direction);
            newBoard = moveUp(newBoard);
        }//if (up)

        else if(direction == "ArrowDown"){
            newBoard = moveDown(newBoard);
            [newBoard, newScore] = combine_column(newBoard, newScore, direction);
            newBoard = moveDown(newBoard);
        }//elif (down)

        else if(direction == "ArrowLeft"){
            newBoard = moveLeft(newBoard);
            [newBoard, newScore] = combine_row(newBoard, newScore, direction);
            newBoard = moveLeft(newBoard);
        }//elif(left)

        else if(direction == "ArrowRight"){
            newBoard = moveRight(newBoard);
            [newBoard, newScore] = combine_row(newBoard, newScore, direction);
            newBoard = moveRight(newBoard);
        }//elif(right)


        //generate new tile if not win
        if(need_update(oldBoard, newBoard)){
            newBoard = generate_new(newBoard);
        }

        setRows(newBoard);
        setScore(newScore);
    }//updateBoard()


    function check_win(board){
        for(let i = 0; i < 4; ++i){
            for(let j = 0; j < 4; ++j){
                if(board[i][j] === 2048){
                    return true;
                }
            }
        }
        return false;
    }//check_win()


    function check_lose(board){
        for(let i = 0; i < 3; ++i){
            for(let j = 0; j < 3; ++j){
                if(board[i][j] === 0){
                    return false;
                }
                if(board[i][j]===board[i][j+1] || board[i][j]===board[i+1][j]){
                    return false;
                }
            }//for
        }//for
        //edge case: edges===0 and bottom right corner
        if(board[3][3] === board[3][2]
            || board[3][2] === board[3][1]
            || board[3][1] === board[3][0]
            || board[3][3] === board[2][3]
            || board[2][3] === board[1][3] 
            || board[1][3] === board[0][3] 
            || board[3][3] === 0
            || board[3][2] === 0
            || board[3][1] === 0
            || board[3][0] === 0
            || board[2][3] === 0
            || board[1][3] === 0
            || board[0][3] === 0){
            return false;
        }
        return true;
    }//check_lose()


    function resetBoard(){
        setScore(0);
        setRows(init_rows);
    }//resetBoard()

    function how_to_play(){
        return(<>
        Use your arrow keys to move the tiles. 
        Tiles with the same number merge into one when they touch. 
        Add them up to reach Santa Ono! 
        </>);
    }//how_to_play()

    function show_key(){
        return(<div>
        <div> <img className="small_pic" src={get_img(2048)} alt="" /> Santa Ono - 2048</div>
        <div> <img className="small_pic" src={get_img(1024)} alt="" /> J.J. McCarthy - 1024</div>
        <div> <img className="small_pic" src={get_img(512)} alt="" /> Law Library - 512</div>
        <div> <img className="small_pic" src={get_img(256)} alt="" /> Juwan Howard - 256</div>
        <div> <img className="small_pic" src={get_img(128)} alt="" /> Burton Memorial Tower - 128</div>
        <div> <img className="small_pic" src={get_img(64)} alt="" /> Museum of Natural History - 64</div>
        <div> <img className="small_pic" src={get_img(32)} alt="" /> Michigan Union - 32</div>
        <div> <img className="small_pic" src={get_img(16)} alt="" /> The Cube - 16</div>
        <div> <img className="small_pic" src={get_img(8)} alt="" /> Big House - 8</div>
        <div> <img className="small_pic" src={get_img(4)} alt="" /> Skeeps - 4</div>
        <div> <img className="small_pic" src={get_img(2)} alt="" /> NYPD - 2</div>
        </div>);
    }//show_key()
    

    return (
    <div className="board">
        <div className="wrapper">
            <h2 className="flex">
                Score: {score} <br /><br />
                <form>
                    <input className="reset" 
                        type="button" 
                        value="Reset"
                        onClick={() => resetBoard()}
                    />
                </form>
            </h2>
            <h2 className="help">
                <div className="dropdown">
                    <button className="dropbtn">How to Play</button>
                        <div className="dropdown-content">
                            <div styles="background-color:white;">{how_to_play()}</div>
                        </div>  
                </div> <br /><br />
                <div className="dropdown">
                    <button className="dropbtn">Key</button>
                        <div className="dropdown-content">
                            <div>{show_key()}</div>
                        </div>  
                </div> <br />
            </h2>
        </div>


        <div>{renderBoard()}</div>
        <h1 className="end">
            {check_lose(rows) ? "You lose!" : 
                check_win(rows) ? "You win!": ""}
        </h1>

        <div className="credits">
        Created by: Daniel Peacock 
        </div>
    </div>
    )
}//Board()
  
  export default Board;