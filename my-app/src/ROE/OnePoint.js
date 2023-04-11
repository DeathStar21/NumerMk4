// var x0=2
// var x1,e
// function fun(x0){
//     return (1+x0)**(1/2)
// }
// for(var i=1;i>-1;i++)
// {
//     console.log(i)
//     x1=fun(x0)
//     console.log("x1= ",x1)
//     e=Math.abs((x1-x0)/x1)
//     console.log("e= ",e)
//     x0=x1
//     if(e<0.000001)
//     {
//         break
//     }
// }
import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'

const OnePoint =()=>{

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const Calbisection = (xl, xr) => {
        var xm,fXm,fXr,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        var tempData = [];

        // Equation = "(2^4+2*y)-13"
        let foundArr = Equation.match(/[a-zA-Z]/g);
        // [y]
        foundArr = [...new Set(foundArr)];
        if(foundArr.length>1 || foundArr==0)
        {
            alert("Equation must be contain only one variable!!!");
            return;
        }

        do
        {
            xm = (xl+xr)/2.0;
            scope = {}
            scope[foundArr[0]] = xr;
            // Equation = (x^4)-13
            // scope = {x: 3}
            fXr = evaluate(Equation, scope)

            scope = {}
            scope[foundArr[0]] = xm;
            fXm = evaluate(Equation, scope)

            iter ++;
            if (fXm*fXr > 0)
            {
                ea = error(xr, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr
                }
                tempData.push(obj)
                xr = xm;
            }
            else if (fXm*fXr < 0)
            {
                ea = error(xl, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr
                }
                tempData.push(obj)
                xl = xm;
            }
        }while(ea>e && iter<MAX)
        console.log('tempData =>',tempData);

        setData(tempData);
        setX(xm)
    }

    const [data, setData] = useState([]);
    const [Equation,setEquation] = useState("(x^4)-13")
    const [X,setX] = useState(0)
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXL = (event) =>{
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) =>{
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        Calbisection(xlnum,xrnum);
    }

    return (
            <Container>
              <h1>One Point Iteration Method</h1>
                <Form >
                    <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XL</Form.Label>
                        <input type="number" id="XL" onChange={inputXL} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XR</Form.Label>
                        <input type="number" id="XR" onChange={inputXR} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button variant="dark" onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                <br></br>
                <h5>Answer = {X.toPrecision(7)}</h5>
                {data.length > 0 && 
                    <Container>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th width="10%">Iteration</th>
                                    <th width="30%">XL</th>
                                    <th width="30%">XM</th>
                                    <th width="30%">XR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((element, index)=>{
                                    return  (
                                    <tr key={index}>
                                        <td>{element.iteration}</td>
                                        <td>{element.Xl}</td>
                                        <td>{element.Xm}</td>
                                        <td>{element.Xr}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </Table>
                    </Container>  
                }
                
               
            </Container>
           
    )
}

export default OnePoint
