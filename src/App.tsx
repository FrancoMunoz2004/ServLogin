import React, { lazy, Suspense } from 'react';
import './App.css';


import { Route, Routes } from "react-router-dom";
import { ScaleLoader } from 'react-spinners';

import Empresa3 from './components/empresas/Empresa3';
import Empresa1 from './components/empresas/Empresa1';
import Empresa2 from './components/empresas/Empresa2';

const Login = lazy(() =>import('./components/LOGIN/Login'))
const Admin = lazy(() =>import('./components/Admin/admin'))
const VistaEmpleado = lazy(() =>import('./components/Empleado/vistaEmpleado'))

const App: React.FC = () => {

  return (
    <div className="App">
      <Suspense fallback={<ScaleLoader color="#36d7b7"/>}>

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Admin/:user" element={<Admin/>} />
        <Route path="/Empleado/:user" element={<VistaEmpleado />}/>
        <Route path="/Empresa/:user/WOW" element={<Empresa1 />}/>
        <Route path="/Empresa/:user/Porcifenix" element={<Empresa2 />}/>
        <Route path="/Empresa/:user/CAE" element={<Empresa3 />}/>
        
        
      </Routes>

      </Suspense>


    </div>
  );
}

export default App;
