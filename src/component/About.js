import React ,{useState}from 'react'

export default function About() {

  const  [myStyle, setMyStyle] = useState({
    color:'black',
    backgroundColor:'white'
  })

  const [btnbutton, setbtnbutton] = useState('turn dark mode on ')
  // const myStyle ={
  //   color:'white',
  //   backgroundColor:'black'
  // }

   const togglestyle =()=>{

    if (myStyle.color==='black'){
      
        setMyStyle({
          
      color:'white',
      backgroundColor:'black'
      });
      setbtnbutton('turn light mode on')


     
    }
    else{
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setbtnbutton('turn dark mode on')

    }
  }
  
  

  return (
    <div className='container' style={myStyle}>
              <h1>About</h1>
              

              <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" >
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show"style={myStyle} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong >This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just About any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just About any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}> 
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just About any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
       </div>

       <div className ="container my-3">
       <button type="button" onClick={togglestyle} className="btn btn-primary">{btnbutton}</button>


       </div>





    </div>
  )
}
