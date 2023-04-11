import React, { Component } from 'react'
import { Card, Input, Button, Table } from 'antd';


import { lusolve, round, squeeze } from 'mathjs';


var columns = [
    {
        title: "No.",
        dataIndex: "no",
        key: "no"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Y",
        dataIndex: "y",
        key: "y"
    }
];
var x, y, tableTag, fx, regressionMatrixX, regressionMatrixY, matrixA, matrixB, answer

class MultipleLinear extends Component {

    constructor() {
        super();
        x = []
        y = []

        tableTag = []
        this.state = {
            nPoints: 0,
            X: 0,
            interpolatePoint: 0,
            showInputForm: true,
            showTableInput: false,
            showOutputCard: false
        }
        this.handleChange = this.handleChange.bind(this);


    }
    createTableInput(n, X) {
        for (var i = 1; i <= n; i++) {
            x[i] = []
            for (var j = 1; j <= X; j++) {
                x[i].push(<Input 
                    id={"x" + i + "" + j} key={"x" + i + "" + j} placeholder={"x" + i + "" + j} />);
            }
            y.push(<Input
                id={"y" + i} key={"y" + i} placeholder={"y" + i} />);
            tableTag.push({
                no: i,
                x: x[i],
                y: y[i - 1]
            })

        }
        regressionMatrixX = new Array(X + 1)
        regressionMatrixY = new Array(X + 1)
        for (i = 1; i <= X + 1; i++) {
            regressionMatrixX[i] = []
            for (j = 1; j <= X + 1; j++) {
                regressionMatrixX[i][j] = []
            }
        }

        this.setState({
            showInputForm: false,
            showTableInput: true,
        })
    }
    initialValue(n, X) {
        x = new Array(X + 1)
        y = []
        for (var i = 1; i <= X; i++) {
            x[i] = []
            for (var j = 1; j <= n; j++) {
                x[i][j] = parseInt(document.getElementById("x" + j + "" + i).value);
            }
        }
        for (i = 1; i <= n; i++) {
            y[i] = parseFloat(document.getElementById("y" + i).value);
        }
    }
    multipleLinear(n, X) {
        for (var i = 1; i <= X + 1; i++) {
            for (var j = i; j <= X + 1; j++) {
                if (i === 1) {
                    if (j === 1) {
                        regressionMatrixX[i][j] = n
                        regressionMatrixY[j] = this.summation(y)
                    }
                    else {
                        regressionMatrixX[i][j] = regressionMatrixX[j][i] = this.summation(x[j - 1])
                        regressionMatrixY[j] = this.summationOfTwo(x[j - 1], y)
                    }


                }
                else {
                    regressionMatrixX[i][j] = regressionMatrixX[j][i] = this.summationOfTwo(x[i - 1], x[j - 1])
                }
            }
        }
        this.findX(X)
    }
    findX(X) {
        matrixA = new Array(X + 1)
        matrixB = new Array(X + 1)
        for (var i = 0; i < X + 1; i++) {
            matrixA[i] = []
            for (var j = 0; j < X + 1; j++) {
                matrixA[i][j] = regressionMatrixX[i + 1][j + 1]
            }
            matrixB[i] = regressionMatrixY[i + 1]
        }
        answer = squeeze(round(lusolve(matrixA, matrixB)))
        console.log(answer)
    }
    summation(A) {
        var sum = 0
        for (var i = 1; i < A.length; i++) {
            sum += A[i]
        }
        return sum
    }
    summationOfTwo(A, B) {
        var sum = 0
        for (var i = 1; i < A.length; i++) {
            sum += A[i] * B[i]
        }
        return sum
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div>
                <h2>Multiple Linear Regression</h2>
                <div className="row">
                    <div className="col">
                        <Card
                            bordered={true}
                            
                            onChange={this.handleChange}
                        >
                            {this.state.showInputForm &&
                                <div>
                                    <h6>Number of X</h6><Input size="large" name="X" ></Input>
                                    <h6>Number of points(n)</h6><Input size="large" name="nPoints" ></Input>
                                    <Button id="dimention_button" onClick={
                                        () => this.createTableInput(parseInt(this.state.nPoints), parseInt(this.state.X))}
                                       >
                                        Submit<br></br>
                                    </Button>
                                </div>
                            }
                            {this.state.showTableInput &&
                                <div>
                                    <Table columns={columns} dataSource={tableTag} pagination={false} bordered={true} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "white", overflowY: "scroll", minWidth: 120, maxHeight: 300 }}></Table>
                                    <Button
                                        id="matrix_button"
                                      
                                        onClick={() => {
                                            this.initialValue(parseInt(this.state.nPoints), parseInt(this.state.X));
                                            this.multipleLinear(parseInt(this.state.nPoints), parseInt(this.state.X))
                                        }}
                                    >
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
                               
                            >
                                <p>{fx}</p>

                            </Card>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default MultipleLinear;