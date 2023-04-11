import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <Container>
      <br/>
      <h1>Root of Equation</h1>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Graphical Method</Card.Title>
              <Card.Text>Graphical methods are useful aids to portray the results of formal.</Card.Text>
              <Link to="/Graphical" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Bisection Method</Card.Title>
              <Card.Text>The bisection method is used to find the roots of a polynomial equation.</Card.Text>
              <Link to="/Bisection" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>False Position Method</Card.Title>
              <Card.Text>The false position method is a very old method for solving an equation.</Card.Text>
              <Link to="/FalsePosition" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>One Point Iteration Method</Card.Title>
              <Card.Text>Fixed-point iterations are a discrete dynamical system on one variable.</Card.Text>
              <Link to="/OnePoint" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Newton-Raphson Method</Card.Title>
              <Card.Text>Newton-Raphson Method is a root-finding algorithm. </Card.Text>
              <Link to="/NewtonRape" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Secant Method</Card.Title>
              <Card.Text>Secant Method is a root-finding procedure that uses a series of roots.</Card.Text>
              <Link to="/Secant" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <br/>
      <h1>Linear Algebraic</h1>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Cramer's Rule</Card.Title>
              <Card.Text>In linear algebra, Cramer's rule is an explicit formula for the solution.</Card.Text>
              <Link to="/Cramer" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Gauss Elimination Method</Card.Title>
              <Card.Text>the Gaussian elimination method is known as the row reduction algorithm.</Card.Text>
              <Link to="/Elimination" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Gauss Jordan Method</Card.Title>
              <Card.Text>After the Gauss-Jordan Method, the result is in reduced row echelon form.</Card.Text>
              <Link to="/Jordan" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Matrix Inversion Method</Card.Title>
              <Card.Text>This method can be applied only when the coefficient matrix is a square matrix.</Card.Text>
              <Link to="/Matrix" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>LU Decomposition</Card.Title>
              <Card.Text>In linear algebra, LU Decomposition of a matrix.</Card.Text>
              <Link to="/LU" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Cholesky Decomposition Method</Card.Title>
              <Card.Text>a powerful numerical technique that.</Card.Text>
              <Link to="/Cholesky" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Jacobi Iteration Method</Card.Title>
              <Card.Text>The Jacobi iterative method is considered as an iterative algorithm.</Card.Text>
              <Link to="/Jacobi" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Gauss-Seidal Iteration Method</Card.Title>
              <Card.Text>The Guass-Seidel method is a improvisation of the Jacobi method.</Card.Text>
              <Link to="/Gauss-Seidal" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Conjugate Gradient Method</Card.Title>
              <Card.Text>s an algorithm for the numerical solution of linear equations.</Card.Text>
              <Link to="/Conjugate" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <br/>
      <h1>Interpolation</h1>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Newton's Divided-Differences</Card.Title>
              <Card.Text>This formula is called Newton's Divided Difference Formula.</Card.Text>
              <Link to="/Newton" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Lagrange Polynomials</Card.Title>
              <Card.Text>Lagrange interpolating polynomial is the unique polynomial of lowest degree.</Card.Text>
              <Link to="/Lagrange" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Spline Interpolation</Card.Title>
              <Card.Text>In the mathematical field of numerical analysis, spline interpolation.</Card.Text>
              <Link to="/Spline" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <h1>Regression</h1>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Linear Regression</Card.Title>
              <Card.Text>Linear regression analysis is used to predict the value of a variable.</Card.Text>
              <Link to="/Linear" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Polynomial Regression</Card.Title>
              <Card.Text>It usually corresponded to the least-squares method.</Card.Text>
              <Link to="/Polynomial" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Multiple Linear Regression</Card.Title>
              <Card.Text>Is a regression model that estimates the relationship between a quantitative.</Card.Text>
              <Link to="/Multiple" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <h1>Integration</h1>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Composite Trapezoidal Rule</Card.Title>
              <Card.Text>If we are applying the composite trapezoidal rule to n intervals.</Card.Text>
              <Link to="/ComTrap" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Composite Simpson's Rule</Card.Title>
              <Card.Text>Simpson's rule is then applied to each subinterval.</Card.Text>
              <Link to="/ComSim" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        
      </Row>
    </Container>
  )
}
