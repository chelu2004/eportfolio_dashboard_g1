import './App.css'; // O './index.css' si tu plantilla de fork usa ese archivo
import Cabecera from './componentes/Cabecera';
import Dashboard from './componentes/Dashboard';
import Roles from './componentes/Roles.jsx';


function App() {
  const usuario = "Juan Perez";
  const menu = "menu";
  const token = "abc123xyz456";
return (
    
    <div className="container-fluid p-0">
<Cabecera usuario={usuario}/> 

    
      <div className="row g-0 vh-100">
        <div className="col-3">
        <Roles menu={menu}/>  
        </div>
          <div className="col-9">
 <Dashboard token={token} />

          </div>
       
      </div>
    </div>
  );
}

export default App