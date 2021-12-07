import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from "react";
import {increment,getUsers} from "./Action";
import { useDispatch, useSelector } from "react-redux";


function App() {

  let state=useSelector((state)=>state.mainReducer);
  let dispatch=useDispatch();

console.log(state);

  // let[data,setData]=useState();
  // useEffect(() => {
  //   fetch("/userData/allUser")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setData(json);
  //     });
  // }, []);
   
// console.log(data);
  




  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=>{
        // axios.get("http://localhost:8000/auth/signup");

        dispatch(increment(state))
        
      }}>click</button>

   
    <button onClick={()=>{
         dispatch(getUsers(state))
    }}>getUser</button>
 



    </div>
  );
}

export default App;
