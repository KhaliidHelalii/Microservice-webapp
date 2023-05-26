import React,{Component} from"react" ;
import Hero from './components/Hero'
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Details from './components/Details';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}
callAPI() {
    fetch("http://localhost:7000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}
componentWillMount() {
    this.callAPI();
}
render() {
  return(
     <Routes>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/' element={<Hero></Hero>}></Route>
       < Route path='/Register' element={<Register></Register>}></Route>
       < Route path='/Details' element={<Details></Details>}></Route>
  
      </Routes>
  );
}
}
export default App;
