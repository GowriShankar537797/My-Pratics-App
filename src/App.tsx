import { Component } from 'react';
import './App.css';
import MyTest from './components/productList';
// import Routes from './routes';

class App extends Component {

  constructor(date:string){
    super(date)
  }


  render(){ 
    return (
    <div className="App">
<MyTest />
     {/* <Routes/> */}
    </div>
  );}
}

export default App;
