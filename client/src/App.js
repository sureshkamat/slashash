
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AllRoutes } from './Components/AllRoutes';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
    </div>
  );
}

export default App;
