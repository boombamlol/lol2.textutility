import React, { useState } from 'react';


const TextForms = (props) => {
    const handleUpClick = () => {
        let newText = count.toUpperCase();
        setCount(newText)
    }

    const handleLoClick = () => {
        let newText = count.toLowerCase();
        setCount(newText)
    }
    const handleClearClick = () => {
        let newText = '';
        setCount(newText)
    }
    const handleCopy = () => {      
        navigator.clipboard.writeText(count);
    }
    const handleExtraSpace = () => {
        let newText = count.split(/[ ]+/)
        setCount(newText.join(" "))
    }
    const handleonChange = (event) => {
        setCount(event.target.value)
    }
    const [count, setCount] = useState('');
    // setCount("dfbfbsjbsjfl") {you can change it like that not like the var,let}


    return (
        <>
        
            <div className="container ">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={count} onChange={handleonChange} id="myBox" rows="8" placeholder='Enter Your Text Here' ></textarea>
                </div>

                <button disabled={count.length === 0} className="btn btn-primary mx-2  my-2" onClick={handleUpClick}>Convert Uppercase</button>
                <button disabled={count.length === 0} className="btn btn-success mx-2 my-2" onClick={handleLoClick}>Convert Lowercase</button>
                <button disabled={count.length === 0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={count.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={count.length === 0} type="button" className="btn btn-warning mx-2 my-2" onClick={handleExtraSpace}>Remove ExtraSpace</button>


            </div>
            <div className="container my-3">

                <h1>This Is Summary</h1>
                {/* <p>{count.split(" ").length} words and {count.length} characters</p>  */}
                {/* <p>{count.split(" ").filter((element)=>{return element.length!==0}).length} words and {count.length} characters (This Will Count Sapce As Character)</p>  */}
                <p>{count.trim() === '' ? 0 : count.match(/\S+/g).length} words and {count.replace(/\s+/g, '').length} characters</p>
                <p>{0.008 * count.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To read</p>
                    <h2>Preview in paragraph</h2>
                        <p id="first">{count.length > 0 ? count : "Nothing To Preview"} </p>
                

                <p className="d-inline-flex gap-1">
                    <button className="btn btn-primary  my-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <h2>Preview As It Is</h2>
                    </button>
                </p>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <pre>{count.length > 0 ? count : "Nothing To Preview"}</pre>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextForms
