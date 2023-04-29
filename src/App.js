import './App.css';
import Footer from './Footer';
import Header from './Header';
import Request from './apiRequest';
import Form from "./Form"

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Footer></Footer>
       <Form />
       <Request></Request> 
       
    </div>
    
  );
}

export default App;
