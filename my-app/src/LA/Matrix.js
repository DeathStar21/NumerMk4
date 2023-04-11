import React, { Component } from 'react'
import { Card, Input, Button } from 'antd';

import { inv, multiply, fraction, format } from 'mathjs';


var A = [], B = [], matrixA = [], matrixB = [], output = [], answer

class Inverse extends Component {

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
        this.inverse = this.inverse.bind(this);

    }

    inverse(n) {
        this.initMatrix();
        try {
            A = inv(A);
            answer = multiply(A, B)
            for (var i = 0; i < n; i++) {
                for (var j = 0; j < n; j++) {
                    if (!Number.isInteger(A[i][j])) {
                        A[i][j] = this.printFraction(fraction(A[i][j]));
                    }

                }
            }
            for (i = 0; i < n; i++) {
                for (j = 0; j < n; j++) {
                    output.push(A[i][j]);
                    output.push("  ");
                }
                output.push(<br />)
            }

        } catch (error) {
            output.push("Matrix doesn't exist, Determinant is zero")
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
                <h2>Matrix Inversion</h2>
                <div className="row">
                    <div className="col">
                        <Card
                            bordered={true}
                        
                            onChange={this.handleChange}
                        >

                            {this.state.showDimentionForm &&
                                <div>
                                    Row<Input size="large" name="row"></Input>
                                    Column<Input size="large" name="column"></Input>
                                    <Button id="dimention_button" onClick={
                                        () => this.createMatrix(this.state.row, this.state.column)
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
                                        
                                        onClick={() => this.inverse(this.state.row)}>
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
                                <p>X = {JSON.stringify(answer)}</p>
                            </Card>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Inverse;



