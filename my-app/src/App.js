import React from 'react'
import Home from './Home'
/*Root */
import Graphical from './ROE/Graphical'
import Bisection from './ROE/Bisection'
import FalsePosition from './ROE/FalsePosition'
import OnePoint from './ROE/OnePoint'
import NewtonRape from './ROE/NewtonRaphon'
import Secant from './ROE/Secant'
/*LA */
import Cramer from './LA/Cramer'
import Gauss from './LA/GaussElimination'
import Jordan from './LA/GaussJordan'
import Inverse from './LA/Matrix'
import LU from './LA/LU'
import Cholesky from './LA/Cholesky'
import Jacobi from './LA/Jacobi'
import Seidel from './LA/GaussSeidal'
/*Interpo */
import Newton from './Interpo/Newton'
import Lagrange from './Interpo/Lagrange'
import Spline from './Interpo/Spline'
/*Regress */
import Linear from './Regress/Linear'
import Poly from './Regress/Poly'
import MultipleLinear from './Regress/Multi'
/*Integ */
import ComSim from './Integ/ComSim'
import ComTrap from './Integ/ComTrap'

import Navbar2 from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gradient from './LA/Conjugate'

export default function App() {
  return (
    <Router>
      <Navbar2 />
      <Routes>
        Root of equation
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Graphical" element={<Graphical />}/>
        <Route path="/Bisection" element={<Bisection />}/>
        <Route path="/FalsePosition" element={<FalsePosition />}/>
        <Route path="/OnePoint" element={<OnePoint />}/>
        <Route path="/NewtonRape" element={<NewtonRape />}/>
        <Route path="/Secant" element={<Secant />}/>

        Linear
        <Route path="/Cramer" element={<Cramer />}/>
        <Route path="/Elimination" element={<Gauss />}/>
        <Route path="/Jordan" element={<Jordan />}/>
        <Route path="/Matrix" element={<Inverse />}/>
        <Route path="/LU" element={<LU />}/>
        <Route path="/Cholesky" element={<Cholesky />}/>
        <Route path="/Jacobi" element={<Jacobi />}/>
        <Route path="/Gauss-Seidal" element={<Seidel />}/>
        <Route path="/Conjugate" element={<Gradient />}/>

        Interpo
        <Route path="/Newton" element={<Newton />}/>
        <Route path="/Lagrange" element={<Lagrange />}/>
        <Route path="/Spline" element={<Spline />}/>

        Regresion
        <Route path="/Linear" element={<Linear />}/>
        <Route path="/Polynomial" element={<Poly />}/>
        <Route path="/Multiple" element={<MultipleLinear />}/>

        Integrate
        <Route path="/ComSim" element={<ComSim />}/>
        <Route path="/ComTrap" element={<ComTrap />}/>
        
      </Routes>
    </Router>

  )
}
