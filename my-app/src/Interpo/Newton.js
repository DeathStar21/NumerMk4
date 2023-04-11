import React, { Component } from 'react'
import { Card, Input, Button, Table } from 'antd';


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
var x, y, tableTag, interpolatePoint, tempTag, fx

class Newton extends Component {

    constructor() {
        super();
        x = []
        y = []
        interpolatePoint = []
        tempTag = []
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
        this.newton_difference = this.newton_difference.bind(this);

    }
    createTableInput(n) {
        for (var i = 1; i <= n; i++) {
            x.push(<Input
                id={"x" + i} key={"x" + i} placeholder={"x" + i} />);
            y.push(<Input
                id={"y" + i} key={"y" + i} placeholder={"y" + i} />);
            tableTag.push({
                no: i,
                x: x[i - 1],
                y: y[i - 1]
            });
        }


        this.setState({
            showInputForm: false,
            showTableInput: true,
        })
    }
    createInterpolatePointInput() {
        for (var i = 1; i <= this.state.interpolatePoint; i++) {
            tempTag.push(<Input 
                id={"p" + i} key={"p" + i} placeholder={"p" + i} />)
        }
    }
    initialValue() {
        x = []
        y = []
        for (var i = 1; i <= this.state.nPoints; i++) {
            x[i] = parseFloat(document.getElementById("x" + i).value);
            y[i] = parseFloat(document.getElementById("y" + i).value);
        }
        for (i = 1; i <= this.state.interpolatePoint; i++) {
            interpolatePoint[i] = parseInt(document.getElementById("p" + i).value);
        }
    }
    C(n) {
        if (n === 1) {
            return 0
        }
        else {
            return ((y[interpolatePoint[n]] - y[interpolatePoint[n - 1]]) / (x[interpolatePoint[n]] - x[interpolatePoint[n - 1]])) - this.C(n - 1)
        }

    }
    findX(n, X) {
        if (n < 1) {
            return 1
        }
        else {
            console.log(X + " - " + x[interpolatePoint[n]])
            return (X - x[interpolatePoint[n]]) * this.findX(n - 1, X)
        }
    }
    newton_difference(n, X) {
        this.initialValue()
        fx = y[1]
        if (n === 2) { //if linear interpolate
            fx += ((y[interpolatePoint[2]] - y[interpolatePoint[1]]) / (x[interpolatePoint[2]] - x[interpolatePoint[1]])) * (X - x[interpolatePoint[1]])
        }
        else {
            for (var i = 2; i <= n; i++) {
                fx += (this.C(i) / (x[interpolatePoint[i]] - x[interpolatePoint[1]])) * this.findX(i - 1, X)
            }
        }

        this.setState({
            showOutputCard: true
        })

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div>
                <h2>Newton's Divided Differences Interpolation</h2>
                <div className="row">
                    <div className="col">
                        <Card
                            bordered={true}
                           
                            onChange={this.handleChange}
                        >
                            {this.state.showTableInput &&
                                <div>
                                    <Table columns={columns} dataSource={tableTag} pagination={false} bordered={true} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "white", overflowY: "scroll", minWidth: 120, maxHeight: 300 }}></Table>
                                    <br /><h2>interpolatePoint {parseInt(this.state.interpolatePoint) === 2 ? "(Linear)" :
                                        parseInt(this.state.interpolatePoint) === 3 ? "(Quadratic)" :
                                            "(Polynomial)"}</h2>{tempTag}
                                    <Button
                                        id="matrix_button"
                                       
                                        onClick={() => this.newton_difference(parseInt(this.state.interpolatePoint), parseFloat(this.state.X))}>
                                        Submit
                                </Button>
                                </div>}

                            {this.state.showInputForm &&
                                <div>
                                    <h6>Number of points(n)</h6><Input size="large" name="nPoints"></Input>
                                    <h6>X</h6><Input size="large" name="X"></Input>
                                    <h6>interpolatePoint</h6><Input size="large" name="interpolatePoint"></Input>
                                    <Button id="dimention_button" onClick={
                                        () => {
                                            this.createTableInput(parseInt(this.state.nPoints));
                                            this.createInterpolatePointInput()
                                        }
                                    }
                                        >
                                        Submit<br></br>
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
                                style={{ border: "2px solid black", background: "rgb(61, 104, 61) none repeat scroll 0% 0%", color: "white" }}
                            >
                                <p style={{ fontSize: "24px", fontWeight: "bold" }}>{fx}</p>

                            </Card>
                        }
                    </div>

                </div>


            </div>
        );
    }
}
export default Newton;



