import { Button, Card, Input, Table } from 'antd';
import { add, det, multiply, subtract, transpose } from 'mathjs';
import React, { Component } from 'react';



var A = [], B = [], matrixA = [], matrixB = [], matrixX = [], x, epsilon, dataInTable = [], count = 1, output
var columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "λ",
        dataIndex: "lambda",
        key: "lambda"
    },
    {
        title: "{X}",
        dataIndex: "X",
        key: "X"
    },
    {
        title: "Error",
        dataIndex: "error",
        key: "error"
    }
];
class Gradient extends Component {
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
        this.conjugate_gradient = this.conjugate_gradient.bind(this);

    }
    positive_definite(dimention) {
        var tempMatrix = []
        for (var i = 0; i < dimention; i++) {
            tempMatrix[i] = []
            for (var j = 0; j < dimention; j++) {
                tempMatrix[i][j] = A[i][j];
            }
        }
        if (det(tempMatrix) <= 0) {
            return false;
        }
        if (dimention !== this.state.row - 1) {
            return this.positive_definite(++dimention);
        }
        return true;
    }

    conjugate_gradient() {
        this.initMatrix();
        if (!this.positive_definite(1)) {
            output = "This matrix doesn't positive definite"
            this.setState({
                showOutputCard: true
            });
            return false;
        }
        //find {R0}
        var R = subtract(multiply(A, x), B);
        console.log(R)
        //find D0
        var D = multiply(R, -1);
        console.log(D)
        do {
            //find λ
            var λ = (multiply(multiply(transpose(D), R), -1)) /
                (multiply(multiply(transpose(D), A), D))
            console.log(λ)
            /*------------------------------------------------------------------*/

            //find new {X}
            x = add(x, multiply(λ, D));
            console.log(x)
            //find new {R}
            R = subtract(multiply(A, x), B);
            console.log(R)
            //find epsilon
            epsilon = Math.sqrt(multiply(transpose(R), R)).toFixed(8);
            this.appendTable(λ, JSON.stringify(x).split(',').join(",\n"), epsilon);
            console.log(epsilon)
            var α = (multiply(multiply(transpose(R), A), D)) /
                multiply(transpose(D), multiply(A, D)).toFixed(8);
            console.log(α)
            D = add(multiply(R, -1), multiply(α, D))
            console.log(D)
        } while (epsilon > 0.000001);
        output = x
 
        this.setState({  
            showOutputCard: true
        });


    }
    createMatrix(row, column) {
        A = []
        B = []
        matrixA = []
        matrixB = []
        matrixX = []
        x = []
        dataInTable = []
        for (var i = 1; i <= row; i++) {
            for (var j = 1; j <= column; j++) {
                matrixA.push(<Input 
                    id={"a" + i + "" + j} key={"a" + i + "" + j} placeholder={"a" + i + "" + j} />)
            }
            matrixA.push(<br />)
            matrixB.push(<Input
                id={"b" + i} key={"b" + i} placeholder={"b" + i} />)
            matrixX.push(<Input 
                id={"x" + i} key={"x" + i} placeholder={"x" + i} />)


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
            x.push(parseFloat(document.getElementById("x" + (i + 1)).value));
        }
    }
    appendTable(lambda, x, error) {
        dataInTable.push({
            iteration: count++,
            lambda: lambda,
            X: x,
            error: error
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div>
                <h2>Conjugate Gradient Iteration Method</h2>
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
                                        () => { this.createMatrix(this.state.row, this.state.column) }
                                    }
                                        >
                                        Submit
                                    </Button>
                                </div>
                            }

                            {this.state.showMatrixForm &&
                                <div>
                                    <h2>Matrix [A]</h2><br />{matrixA}
                                    <h2>Vector [B]<br /></h2>{matrixB}
                                    <h2>Initial X<br /></h2>{matrixX}
                                    <Button
                                        id="matrix_button"
                                        
                                        onClick={() => this.conjugate_gradient(parseInt(this.state.row))}>
                                        Submit
                                    </Button>
                                </div>

                            }
                        </Card>
                    </div>
                    <div className="col">
                        {this.state.showOutputCard &&
                            <div>
                                <Card
                                    title={"Output"}
                                    bordered={true}
                                   
                                    onChange={this.handleChange} id="answerCard">
                                    <p>{JSON.stringify(output)}</p>
                                </Card>

                            </div>

                        }
                    </div>
                </div>
                {/* <div className="row"> */}
                    {this.state.showOutputCard &&
                        <div>
                            <Card
                                title={"Output"}
                                bordered={true}
                               
                                id="outputCard"
                            >
                                <Table columns={columns} dataSource={dataInTable} bordered={true} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "black", overflowX: "scroll" }}
                                ></Table>
                            </Card>

                        </div>

                    }
                {/* </div> */}


            </div>
        );
    }
}
export default Gradient;



