import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import { AskQuestion } from "../service/util/eQuation";
import { LineChart } from "../component/LineChart";
import axios from "axios";

const FalsePosition =()=>{

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const Calbisection = (xl, xr) => {
        var x1,fX1,fXr,fXl,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        var tempData = [];

        // Equation = "(2^4+2*y)-13"
        let foundArr = Equation.match(/[a-zA-Z]/g);
        // [y]
        foundArr = [...new Set(foundArr)];
        if(foundArr.length>1 || foundArr===0)
        {
            alert("Equation must be contain only one variable!!!");
            return;
        }

        do
        {
            scope = {}
            scope[foundArr[0]] = xr;
            // Equation = (x^4)-13
            // scope = {x: 3}
            fXr = evaluate(Equation, scope)

            scope = {}
            scope[foundArr[0]] = xl;
            // Equation = (x^4)-13
            // scope = {x: 3}
            fXl = evaluate(Equation, scope)

            x1 = (xl*fXr-xr*fXl)/(fXr-fXl);

            scope = {}
            scope[foundArr[0]] = x1;
            fX1 = evaluate(Equation, scope)

            iter ++;
            if (fX1*fXr > 0)
            {
                ea = error(xr, x1);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    X1:x1,
                    Xr:xr
                }
                tempData.push(obj)
                xr = x1;
            }
            else if (fX1*fXr < 0)
            {
                ea = error(xl, x1);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    X1:x1,
                    Xr:xr
                }
                tempData.push(obj)
                xl = x1;
            }
        }while(ea>e && iter<MAX)
        console.log('tempData =>',tempData);

        setData(tempData);
        setX(x1)
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

    const Random=()=>{/*ใช้เรียกฟังก์ชั่นสุ่มสมการ และทำการสุ่มตัวเลขและเครื่องหมายเข้าไปเติมใน Xl และ XR */
        axios.get('http://localhost:7258/falseposition')
        .then((resp) => {
            const data = resp.data
            let num = Math.floor(Math.random()*data.length)
                const usedNums=[];
                while (usedNums.includes(num)) {//ตรวจสอบด้วยฟังก์ชัน includes() ของอาร์เรย์ usedNums หากเลขที่สุ่มได้ไม่ซ้ำกัน ก็จะนำเลขที่สุ่มได้นั้นเก็บไว้ในอาร์เรย์ usedNums//
                    num = Math.floor(Math.random() * data.length);
                }
            usedNums.push(num);
            setEquation(data[num].Equation)
            setXL(data[num].XL)
            setXR(data[num].XR)
        })
    }
    return (
            <Container>
              <h1>False  Position Method</h1>
                <Form >
                    <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XL</Form.Label>
                        <input type="number" id="XL" value={XL} onChange={inputXL} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XR</Form.Label>
                        <input type="number" id="XR" value={XR} onChange={inputXR} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button variant="dark" onClick={calculateRoot}>
                        Calculate
                    </Button>
                    <br/><br/>
                    <Button variant="dark" onClick={Random}>
                        Random Equation
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
                                    <th width="30%">X1</th>
                                    <th width="30%">XR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((element, index)=>{
                                    return  (
                                    <tr key={index}>
                                        <td>{element.iteration}</td>
                                        <td>{element.Xl}</td>
                                        <td>{element.X1}</td>
                                        <td>{element.Xr}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </Table>
                        <LineChart 
                            /*ส่งค่าข้อมูลไปยังกราฟ*/
                            chartData={data} 
                            title="False Position chart" 
                            colors={['255, 99, 132', '53, 162, 235', '0, 255, 0']} 
                            legendLabel={['Xl', 'X1', 'Xr']}
                        />
                    </Container>  
                }
                
               
            </Container>
           
    )
}

export default FalsePosition