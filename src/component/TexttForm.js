import React , {useState}from 'react'




export default function TexttForm(props) {


    const handleUpClick = ()=>{
     //   console.log("upper cse was clicked"+text);
        let newTxt = text.toUpperCase();
        
        setText(newTxt);
        props.showAlert("convert to uppercase","success")
        }

    const ClearUpClick =()=>{
      let newTxt = "";
      setText(newTxt);
      props.showAlert("text has been clean","success")
    } 

    
    const lowerUpClick = ()=>{
            //   console.log("upper cse was clicked"+text);
               let newTxt = text.toLowerCase();
               setText(newTxt);
               props.showAlert("convert to Lowercase","success")

               }  

    

     const handleOnChange = (event)=>{
      
       console.log("on change");
        setText(event.target.value);
       
        }

    const [text, setText] = useState("");

    const [myStyle, setmyStyle] = useState();
    // const [newTxtt, setnewTxtt] = useState();


    // const [text, setmypaste] = useState(mypaste);

    
    

    
    const BoldUpClick = () => {
      setmyStyle({
          color: 'white',
          backgroundColor: 'black',
          fontWeight: 'bold',
          textDecoration: 'underline',
          alignItems: 'center',
          textShadow: '4px 4px 4px green',
      });
  }
  
    const copytext = ()=>{
      // let tb = document.getElementById('box');
      // tb.select();
      
      navigator.clipboard.writeText(text);
      props.showAlert("Text has been copied","success")
      
    }
  

    const pastetext = ()=>{
      let newTxtt =navigator.clipboard.writeText(text);
      console.log(newTxtt);
      

    }
    
  
    
    



  
  return (
    
    
    <div className="container" style={{color:props.mode==='light'?'black':'white', }}>
        
        <h1>{props.heading}</h1>
        
        
        {/* console.log(text); */}
        <div className="mb-3" >
        
        
        <textarea   className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#222831', color:props.mode==='light'?'black':'white' }} value={text} id="box" rows="8" >
          <p>{pastetext} </p>
        
        </textarea >
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={lowerUpClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={ClearUpClick}>Clear </button>
        <button className="btn btn-primary mx-2"  onClick={BoldUpClick}>Formatting </button>
        <button className="btn btn-primary mx-2"  onClick={copytext}>copy text</button>
        <button className="btn btn-primary mx-2"  onClick={pastetext}>pastetext text</button>
        


        <div className="container my-2" style={{color:props.mode==='light'?'black':'white', }}>
            <h1>your text </h1>

            {/* local.replace(local.charAt(0), local.charAt(0).toUpperCase()); */}
            {text.trim()===""?null: <p>{text.split (" ").length-1} and {text.length}</p>}
            
            <p> Time to read  <span>{ 0.008* text.length} </span> </p>

            
           
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter somthing to preview the text"} </p>
            
            

        </div>
    </div>

    
  )
    }
