import React, { Component } from 'react'
import {Card, Input, Button, Table} from 'antd';




var A = [], B = [], matrixA = [], matrixB = [], x , epsilon, dataInTable = [], count=1, matrixX = []
var columns = [
    {
      title: "Iteration",
      dataIndex: "iteration",
      key: "iteration"
    }
];
class Jacobi extends Component {
    
    constructor() {
        super();
        this.state = {
            row: 0,
            column: 0,
            showDimentionForm : true,
            showMatrixForm: false,
            showOutputCard: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.jacobi = this.jacobi.bind(this);
    
    }

  
    jacobi(n) {
        this.initMatrix();
        var temp;
        var xold;
        epsilon = new Array(n);
        do {
            temp = [];
            xold = JSON.parse(JSON.stringify(x));
            for (var i=0 ; i<n ; i++) {
                var sum = 0;
                for (var j=0 ; j<n ; j++) {
                    if (i !== j) { //else i == j That is a divide number
                        sum = sum + A[i][j]*x[j];
                    }
                }
                temp[i] = (B[i] - sum)/A[i][i]; //update x[i]
                
            }        
            x = JSON.parse(JSON.stringify(temp));
        } while(this.error(x, xold)); //if true , continue next iteration

        this.setState({
            showOutputCard: true
        });

      
    }
    error(xnew, xold) {
        for (var i=0 ; i<xnew.length ; i++) {
            epsilon[i] = Math.abs((xnew[i]-xold[i]) / xnew[i])
        }
        this.appendTable(x, epsilon);
        for (i=0 ; i<epsilon.length ; i++) {
            if (epsilon[i] > 0.000001) {
                return true;
            }    
        }
        return false;  
    }   
    createMatrix(row, column) {
        A = []
        B = []
        matrixA = []
        matrixB = []
        x = []
        dataInTable = []
        for (var i=1 ; i<=row ; i++) {
            for (var j=1 ; j<=column ; j++) {
                matrixA.push(<Input 
                id={"a"+i+""+j} key={"a"+i+""+j} placeholder={"a"+i+""+j} />)  
            }
            matrixA.push(<br/>)
            matrixB.push(<Input 
            id={"b"+i} key={"b"+i} placeholder={"b"+i} />)
            matrixX.push(<Input 
            id={"x"+i} key={"x"+i} placeholder={"x"+i} />)  
            
        }

        this.setState({
            showDimentionForm: false,
            showMatrixForm: true,
        })

        

    }
    initMatrix() {
        for(var i=0 ; i<this.state.row ; i++) {
            A[i] = []
            for(var j=0 ; j<this.state.column ; j++) {
                A[i][j] = (parseFloat(document.getElementById("a"+(i+1)+""+(j+1)).value));
            }
            B.push(parseFloat(document.getElementById("b"+(i+1)).value));
            x.push(parseFloat(document.getElementById("x"+(i+1)).value));
        }
    }
    initialSchema(n) {
        for (var i=1 ; i<=n ; i++) {
            columns.push({
                title: "X"+i,
                dataIndex: "x"+i,
                key: "x"+i
            },)
        }
        for (i=1 ; i<=n ; i++) {
            columns.push({
                title: "Error"+i,
                dataIndex: "error"+i,
                key: "error"+i
            },)
        }
    }
    appendTable(x, error) {
        var tag = ''
        tag += '{"iteration": ' + count++ + ',';
        for (var i=0 ; i<x.length ; i++) {
            tag += '"x'+(i+1)+'": '+x[i].toFixed(8)+', "error'+(i+1)+'": ' + error[i].toFixed(8);
            if (i !== x.length-1) {
                tag += ','
            }
        }
        tag += '}';
        dataInTable.push(JSON.parse(tag));  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return(
            <div>
                <h2>Jacobi Iteration Method</h2>
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
                                    <Button id="dimention_button" onClick= {
                                        ()=>{this.createMatrix(this.state.row, this.state.column);
                                            this.initialSchema(this.state.row)}
                                        }  
                                        >
                                        Submit<br></br>
                                    </Button>
                                </div> 
                            }
                            
                            {this.state.showMatrixForm && 
                                <div>
                                    <h6>Matrix [A]</h6><br/>{matrixA}
                                    <h6>Vector [B]<br/></h6>{matrixB}
                                    <h6>Initial X<br/></h6>{matrixX}
                                    <Button 
                                        id="matrix_button"  
                                       
                                        onClick={()=>this.jacobi(parseInt(this.state.row))}>
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
                            
                            id="outputCard"
                            >
                                <Table columns={columns} bordered dataSource={dataInTable} bodyStyle={{fontWeight: "bold", fontSize: "18px", color: "black", overflowX: "scroll", border:"2px solid white"}}></Table>
                            </Card>
                        }                          
                    </div>

                    

 

                   
                </div>

                
            </div>
        );
    }
}
export default Jacobi;



