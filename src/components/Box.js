import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Box = () => {
    const [state,setState] = useState('');
    const [lett,setLett] = useState('')

    const generatorPassword = () =>{
        if(lett===''){
            alert('Enter number for password length ')
        }else{
        let pass = "" ;
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
        for(let i=1; i<=lett; i++){
            let charr = Math.floor(Math.random() * string.length);
            pass += string.charAt(charr)
            setState(pass)
        }
        }
    }

    

    const cpyFunc = () =>{
        navigator.clipboard.writeText(state)
        if(state===''){
            alert('Hit "generat password" Button ')
        }else{toast("Your Password Copied")}
    }

    const lettfunc = (e) =>{
        setLett(e.target.value)
    }
    

    return <>
        <div className="container">
            <h2>Randome Password Generator </h2>
            <input type="text" placeholder="Enter number for password length" onChange={lettfunc} />
            <input type="text" readOnly disabled name="" placeholder="Password" value={state} id="" />
            <div className="btns">
                <button onClick={generatorPassword}>Generat Password</button>
                <button onClick={cpyFunc}>Copy Password</button>
            </div>
            <ToastContainer />
        </div>
    </>;
};

export default Box;
