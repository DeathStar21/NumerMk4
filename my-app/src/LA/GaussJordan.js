// function print(M, msg) {
//     console.log("======" + msg + "=========")
//     for(var k=0; k<M.length; ++k) {
//       console.log(M[k]);
//     }
//     console.log("==========================")
//   }
  
//   function diagonalize(M) {
//     var m = M.length;
//     var n = M[0].length;
//     for(var k=0; k<Math.min(m,n); ++k) {
//       // Find the k-th pivot
//       i_max = findPivot(M, k);
//       if (A[i_max, k] == 0)
//         throw "matrix is singular";
//       swap_rows(M, k, i_max);
//       // Do for all rows below pivot
//       for(var i=k+1; i<m; ++i) {
//         // Do for all remaining elements in current row:
//         var c = A[i][k] / A[k][k];
//         for(var j=k+1; j<n; ++j) {
//           A[i][j] = A[i][j] - A[k][j] * c;
//         }
//         // Fill lower triangular matrix with zeros
//         A[i][k] = 0;
//       }
//     }
//   }
  
//   function findPivot(M, k) {
//     var i_max = k;
//     for(var i=k+1; i<M.length; ++i) {
//       if (Math.abs(M[i][k]) > Math.abs(M[i_max][k])) {
//         i_max = i;
//       }
//     }
//     return i_max;
//   }
  
//   function swap_rows(M, i_max, k) {
//     if (i_max != k) {
//       var temp = A[i_max];
//       A[i_max] = A[k];
//       A[k] = temp;
//     }
//   }
  
//   function makeM(A, b) {
//     for(var i=0; i<A.length; ++i) {
//       A[i].push(b[i]);
//     }
//   }
  
//   function substitute(M) {
//     var m = M.length;
//     for(var i=m-1; i>=0; --i) {
//       var x = M[i][m] / M[i][i];
//       for(var j=i-1; j>=0; --j) {
//         M[j][m] -= x * M[j][i];
//         M[j][i] = 0;
//       }
//       M[i][m] = x;
//       M[i][i] = 1;
//     }
//   }
  
//   function extractX(M) {
//     var x = [];
//     var m = A.length;
//     var n = A[0].length;
//     for(var i=0; i<m; ++i){
//       x.push(A[i][n-1]);
//     }
//     return x;
//   }
  
//   function solve(A, b) {
//     //print(A, "A");
//     makeM(A,b);
//     //print(A, "M");
//     diagonalize(A);
//     //print(A, "diag");
//     substitute(A);
//     //print(A, "subst");
//     var x = extractX(A);
//     //print(x, "x");
//     return x;
//   }
  
//   // sample from: http://mathworld.wolfram.com/GaussianElimination.html
  
//   A = [
//     [2,3,5],
//     [3,1,2],
//     [1,3,4]
//   ]
  
//   b = [0,-2,-3]
  
//   print(A, " A ");
//   print(b, " b ");
  
//   var x = solve(A, b);
  
//   print(x, " x ");
import React, { Component } from 'react'
import { Card, Input, Button } from 'antd';




var A = [], B = [], matrixA = [], matrixB = [], output = []
class Jordan extends Component {

    constructor() {
        super();
        this.state = {
            row: 0,
            column: 0,
            showDimentionForm: true,
            showMatrixForm: false,
            showOutputCard: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.jordan = this.jordan.bind(this);

    }

    jordan(n) {
        this.initMatrix();
        if (A[0][0] === 0) { //pivoting
            var tempRow = JSON.parse(JSON.stringify(A[0]));
            var tempColumn = B[0];
            A[0] = A[1];
            A[1] = tempRow;
            B[0] = B[1];
            B[1] = tempColumn;
        }
        //Forward eliminate
        for (var k = 0; k < n; k++) {
            for (var i = k + 1; i < n; i++) {
                var factor = A[i][k] / A[k][k];
                for (var j = k; j < n; j++) {
                    A[i][j] = A[i][j] - factor * A[k][j];
                }
                B[i] = B[i] - factor * B[k];

            }
        }
        //Backward Substitution
        for (k = n - 1; k >= 0; k--) {
            for (i = k; i >= 0; i--) {

                if (i === k) {//Identity matrix
                    factor = 1 / A[i][k];

                    for (j = 0; j < n; j++) {
                        A[i][j] = A[i][j] * factor;
                    }
                    B[i] = B[i] * factor;


                }
                else {
                    factor = A[i][k] / A[k][k];
                    for (j = 0; j < n; j++) {
                        A[i][j] = A[i][j] - factor * A[k][j];
                    }
                    B[i] = B[i] - factor * B[k];
                }
            }
        }
        for (i = 0; i < n; i++) {
            output.push(B[i]);
            output.push(<br />)
        }
        this.setState({
            showOutputCard: true
        });


    }
    createMatrix(row, column) {
        for (var i = 1; i <= row; i++) {
            for (var j = 1; j <= column; j++) {
                matrixA.push(<Input
                    id={"a" + i + "" + j} key={"a" + i + "" + j} placeholder={"a" + i + "" + j} />)
            }
            matrixA.push(<br />)
            matrixB.push(<Input 
                id={"b" + i} key={"b" + i} placeholder={"b" + i} />)


        }

        this.setState({
            showDimentionForm: false,
            showMatrixForm: true,
        })


    }
    initMatrix() {
        for (var i = 0; i < this.state.row; i++) {
            A[i] = []
            for (var j = 0; j < this.state.column; j++) {
                A[i][j] = (parseFloat(document.getElementById("a" + (i + 1) + "" + (j + 1)).value));
            }
            B.push(parseFloat(document.getElementById("b" + (i + 1)).value));
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        let { row, column } = this.state;
        return (
            <div>
                <h2>Gauss-Jordan Method</h2>
                <div className="row">
                    <div className="col">
                        <Card
                            bordered={true}
                          
                            onChange={this.handleChange}
                        >

                            {this.state.showDimentionForm &&
                                <div>
                                    Row<Input size="large" name="row" ></Input>
                                    Column<Input size="large" name="column"></Input>
                                    <Button id="dimention_button" onClick={
                                        () => this.createMatrix(row, column)
                                    }
                                        >
                                        Submit<br></br>
                                    </Button>
                                </div>
                            }

                            {this.state.showMatrixForm &&
                                <div>
                                    <h6>Matrix [A]</h6><br />{matrixA}
                                    <h6>Vector [B]<br /></h6>{matrixB}
                                    
                                    <Button
                                        id="matrix_button"
                                        
                                        onClick={() => this.jordan(row)}>
                                        Submit
                                    </Button>
                                </div>
                            }

                        </Card>

                    </div>
                    <div className="col">
                        {this.state.showOutputCard &&
                            <Card
                                title={"Output"}
                                bordered={true}
                                
                                onChange={this.handleChange} id="answerCard">
                                <p>{output}</p>
                            </Card>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Jordan;



