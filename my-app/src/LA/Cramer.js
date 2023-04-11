// var A = [
//     [2.0, 3.0, 5.0],
//     [3.0, 1.0, 2.0],
//     [1.0, 3.0, 4.0]
//   ]

// var B = [0, -2, -3]
  
//   function determinant(m) {
//     var l = m.length - 1;
//     if(l === 0) {
//       return m[0][0];
//     } else {
//       if(l === 1) {
//         return m[0][0]*m[l][l]-m[0][l]*m[l][0];
//       } else {
//         return m.reduce(function (p, c, i, a) {
//           var sign = i % 2 === 0 ? 1 : -1;
//           var minor = a.slice(0)
//           minor.splice(0,1);
//           minor = minor.map(function(val) {
//             val = val.slice(0);
//              val.splice(i,1);
//             return val;
//           });
//           return p + (sign * m[0][i] * determinant(minor));
//         }, 0);
//       }
//     }
//   };

// var det=determinant(A);

// for(var i=0;i<3;i++)
// {
//     for(var j=0;j<3;j++)
//     {
//         A[j][i]=B[j]
//     }

//     console.log("X",i+1,"=",determinant(A)/det)
//     A = [
//         [2.0, 3.0, 5.0],
//         [3.0, 1.0, 2.0],
//         [1.0, 3.0, 4.0]
//       ]
    
    
// }
import React, { Component } from 'react'
import { Card, Input, Button } from 'antd';
import { det } from 'mathjs';

var A = [], B = [], answer = [], matrixA = [], matrixB = []
class Cramer extends Component {

    constructor() {
        super();
        this.state = {
            row: parseInt(0),
            column: parseInt(0),
            showDimentionForm: true,
            showMatrixForm: false,
            showOutputCard: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.cramer = this.cramer.bind(this);

    }

    cramer() {
        this.initMatrix();
        var counter = 0;
        

        while (counter != this.state.row) {
            var transformMatrix = JSON.parse(JSON.stringify(A)); //Deep copy
            for (var i = 0; i < this.state.row; i++) {
                for (var j = 0; j < this.state.column; j++) {
                    if (j === counter) {
                        transformMatrix[i][j] = B[i]
                        break;
                    }

                }

            }
            counter++;
            answer.push(<h2>X<sub>{counter}</sub>=&nbsp;&nbsp;{Math.round(det(transformMatrix)) / Math.round(det(A))}</h2>)
            answer.push(<br />)

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
                <h2 >Cramer's Rule</h2>
                <div className="row">
                    <div className="col">
                        <Card
                            bordered={true}
                            
                            onChange={this.handleChange}
                        >

                            {this.state.showDimentionForm &&
                                <div>
                                    Row<Input size="large" name="row"></Input>
                                    Column<Input size="large" name="column" ></Input><br />
                                    <Button id="dimention_button" onClick={
                                        () => this.createMatrix(row, column)
                                    }
                                        >
                                        Submit
                                    </Button>
                                </div>
                            }
                            {this.state.showMatrixForm &&
                                <div>
                                    <h6>Matrix [A]</h6><br />{matrixA}
                                    <h6>Vector [B]<br /></h6>{matrixB}<br/>
                                    <Button
                                        size="large"
                                        id="matrix_button"
                                       
                                        onClick={() => this.cramer()}>
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
                                
                                onChange={this.handleChange}>
                                <p>{answer}</p>
                            </Card>
                        }
                    </div>
                </div>

            </div>
        );
    }
}
export default Cramer;




