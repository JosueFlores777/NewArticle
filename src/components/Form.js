import React, {useState} from "react";
import '../style/style.css'; 

const Form = ({GetFech}) => {

    const[getdata , setData] = useState ([]);

    const handlerSumbit = (e) =>{
        e.preventDefault();

        if(getdata ==="" || !getdata)return;
            GetFech(getdata);
        
    }


    return(
        <div className="container">
            <h1>Welcome to our informative blog</h1>
            <form onSubmit={handlerSumbit}>
                <div className="group-input">
                    <input className="text" type="text" placeholder="Article" onChange={(e) => setData(e.target.value)}></input>
                    <button className="btn" type="submit"> Search</button>
                </div>
            </form>
        </div>
    );

}

export default Form;