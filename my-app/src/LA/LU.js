//หาค่า LU จาก A
// function LUdecomposition(A) { 
//     var n = A.length;
//     var L = new Array(n);
//     var U = new Array(n);

//     for (var i = 0; i < n; i++) {
//         L[i] = new Array(n);
//         U[i] = new Array(n);
//     }

//     for (var i = 0; i < n; i++) {
//         for (var j = 0; j < n; j++) {
//             if (i <= j) {
//                 U[i][j] = A[i][j];
//                 for (var k = 0; k < i; k++) {
//                     U[i][j] -= L[i][k] * U[k][j];
//                 }
//             } else {
//                 L[i][j] = A[i][j];
//                 for (var k = 0; k < j; k++) {
//                     L[i][j] -= L[i][k] * U[k][j];
//                 }
//                 L[i][j] /= U[j][j];
//             }
//         }
//     }

//     return { L: L, U: U };
// }


// let matA = [
//     [5, 2, 0, 0],
//     [2, 5, 2, 0],
//     [0, 2, 5, 2],
//     [0, 0, 2, 5]
//   ];
  
//   let N = matA.length;
//   console.log("matA", matA);
  
//   let matL = [
//     [1, 0, 0, 0],
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1],
//   ];
  
//   let matU = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//   ];
  
//   for (let i = 0; i < N; i++) {
  

//     let n = N - i - 1;
  
//     // u00 == a00
//     let u00 = matU[i][i] = matA[0][0];
  
//     // u1T == a1T
//     let u1T = []
//     for (let j = 0; j < n; j++ ) {
//       u1T[j] = matU[i][j + i + 1] = matA[0][j + 1];
//     }
  
//     // l1 = a1 / u00
//     let l1 = []
//     for (let j = 0; j < n; j++ ) {
//       l1[j] = matL[j + i + 1][i] = matA[j + 1][0] / u00;
//     }
  
//     // A1 = A1 - l1 * u1T
//     let lu = new Array(n);
//     for (let j = 0; j < n; j++) {
//       lu[j] = new Array(n)
//       for (let k = 0; k < n; k++) {
//         lu[j][k] = matA[j + 1][k + 1] - l1[j] * u1T[k];
//       }
//     }
  
//     matA = lu;
  
//   }
  
//   // Check A = LU
//   let original = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//   ];
  
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       for (let k = 0; k < N; k++) {
//         original[i][j] += matL[i][k] * matU[k][j];
//       }
//     }
//   }
  
//   console.log("matL", matL);
//   console.log("matU", matU);
//   console.log("matLU", original);
  
//   let matB = [
//     4, 1, -3, 4
//   ];
  
//   // Ly = B
//   let y = new Array(N);
//   for (let i = 0; i < N; i++) {
//     let sum = 0;
//     for (let j = 0; j < i; j++) {
//       sum += matL[i][j] * y[j];
//     }
//     y[i] = (matB[i] - sum) / matL[i][i];
//   }
  
//   // Ux = y
//   let x = new Array(N);
//   for (let i = N - 1; 0 <= i; i--) {
//     let sum = 0;
//     if (matU[i][i] === 0) {
//       continue;
//     }
//     for (let j = N - 1; j > i; j--) {
//       sum += matU[i][j] * x[j];
//     }
//     x[i] = (y[i] - sum) / matU[i][i];
//   }
  
//   console.log(x);
import React, { Component } from 'react'
import { Card, Input, Button } from 'antd';

import { lusolve, format } from 'mathjs';


var A = [], B = [], matrixA = [], matrixB = [], output = [], decompose;
class LU extends Component {

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
        this.Lu = this.Lu.bind(this);

    }

    Lu() {
        this.initMatrix();
        decompose = lusolve(A, B)
        for (var i = 0; i < decompose.length; i++) {
            output.push(Math.round(decompose[i]));
            output.push(<br />)
        }
        this.setState({
            showOutputCard: true
        });


    }

    printFraction(value) {
        return format(value, { fraction: 'ratio' })
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
        return (
            <div>
                <h2>LU Decomposition</h2>
                <div className="row">
                    <div className="col">
                        <Card
                            bordered={true}
                            
                            onChange={this.handleChange}
                        >


                            {this.state.showDimentionForm &&
                                <div>
                                    Row<Input size="large" name="row" ></Input>
                                    Column<Input size="large" name="column" ></Input>
                                    <Button id="dimention_button" onClick={
                                        () => this.createMatrix(this.state.row, this.state.column)
                                    }
                                       >
                                        Submit
                                </Button>
                                </div>
                            }

                            {this.state.showMatrixForm &&
                                <div>
                                    <h6>Matrix [A]</h6><br />{matrixA}
                                    <h6>Vector [B]<br /></h6>{matrixB}
                                    
                                <Button
                                        id="matrix_button"
                                        
                                        onClick={() => this.Lu()}>
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
export default LU;



