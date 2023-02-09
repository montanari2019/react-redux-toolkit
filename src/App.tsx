
import reactLogo from './assets/react.svg'
import './App.css'
import {Form}  from './components/form/Froms'
import { RenderEmpresa } from './components/render/RenderEmpresa'

export function App() {


  return (
    <div className="">
      <div>
        <a target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

       
      </div>
      <h2>Teste Select Mpark com Redux</h2>

      <div className="card">
        <Form/>  

        {/* </br> */}
        <RenderEmpresa/>
       

      </div>
     
    </div>
  )
}


