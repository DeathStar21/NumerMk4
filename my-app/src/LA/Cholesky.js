import React, { Component } from 'react'
import {Card, Input, Button} from 'antd';

import { format } from 'mathjs';


var A = [], B = [], matrixA = [], matrixB = [], output = []
class Cholesky extends Component {
    
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
        this.cholesky = this.cholesky.bind(this)
    
    }

    cholesky(n) {
        this.initMatrix();
        var  x  = new Array(n);
        var  y  = new Array(n)

        if (matrixA[0][0] === 0) {
            for (var i=0 ; i<n ; i++) {
                var temp = A[0][i];
                matrixA[0][i] = B[i][i];
                matrixB[0][i] = temp;
            }
        }
        var matrixL = new Array(n);
        for(i=0;i<n;i++){
            matrixL[i]  = new Array(n); 
            for(var j=0;j<n;j++){
                matrixL[i][j] = 0;
            }
            x[i] = 0;
            y[i] = 0;
        }
        matrixL[0][0] = Math.sqrt(matrixA[0][0]);
        for(var k=1;k<n;k++){

            for(i=0;i<k;i++){
                var sum = 0;
                if(i!==0){
                    for(j=0;j<i;j++){
                        sum += matrixL[i][j]*matrixL[k][j];
                        //console.log(sum);
                    }
                }
                matrixL[k][i]= (matrixA[i][k]-sum)/matrixL[i][i];//ได้ค่า L ที่ไม่ใช่แนวทะแยง
            }
            sum = 0;
            for(j=0;j<k;j++){
                sum += matrixL[k][j]*matrixL[k][j];
            }
            matrixL[k][k] = Math.sqrt(matrixA[k][k]-sum);
        }
     ;
        y[0] = matrixB[0]/matrixL[0][0];
        for(i=1;i<n;i++){
            sum = 0;
            for(j=0;j<i;j++){
                sum += matrixL[i][j]*y[j];
            }
            y[i] = (matrixB[i]-sum)/matrixL[i][i];
        }
   
        x[n-1] = y[n-1]/matrixL[n-1][n-1];
        for(i=this.state.row-2;i>=0;i--){
            sum = 0;
            for(j=i+1;j<this.state.row;j++){
                sum += matrixL[j][i]*x[j];
            }
            x[i] = (y[i]-sum)/matrixL[i][i];
        }

        this.setState({
            showOutputCard: true
        });
    }
    summation(L, k) {
        var sum = 0
        for (var i=0 ; i<parseInt(this.state.row) ; i++) {
            for (var j=0 ; j<i-2 ; j++) {
                sum+= L[i][j]*L[k][j]
            }
        }
        return sum
    }
    printFraction (value) {
        return format(value, { fraction: 'ratio' })
    }

    createMatrix(row, column) {
        for (var i=0 ; i<row ; i++) {
            for (var j=0 ; j<column ; j++) {
                matrixA.push(<Input 
                id={"a"+(i+1)+""+(j+1)} key={"a"+(i+1)+""+(j+1)} placeholder={"a"+(i+1)+""+(j+1)} />)  
            }
            matrixA.push(<br/>)
            matrixB.push(<Input 
            id={"b"+(i+1)} key={"b"+(i+1)} placeholder={"b"+(i+1)} />)
                
            
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
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return(
            <div>
                <h2>Cholesky Decomposition</h2>
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
                                    <Button id="dimention_button" onClick= {
                                        ()=>this.createMatrix(this.state.row, this.state.column)
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
                                    <Button 
                                        id="matrix_button"  
                                        
                                        onClick={()=>this.cholesky(this.state.row)}>
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
                           
                            onChange={this.handleChange}  id="answerCard">
                                <p>{output}</p>
                            </Card>
                        }   
                    </div>
                </div>     
            </div>
        );
    }
}
export default Cholesky;



