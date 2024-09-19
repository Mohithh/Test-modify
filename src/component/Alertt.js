import React from 'react'

function alertt(props) {
  const capatlize = (word)=>{
    const local= word.toLowerCase();
    
    // return local.charAt(0).toUpperCase() ;
    return local.replace(local.charAt(0), local.charAt(0).toUpperCase());

  }
  return (
     props.mohit && <div className={`alert alert-${props.mohit.type} alert-dismissible fade show`} role="alert">
                    <strong>{ capatlize (props.mohit.type)}</strong>: {props.mohit.msg}
                    </div>
  )
}

export default alertt
