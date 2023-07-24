import React, { useState } from 'react'

const Header = () => {

    const [num, setNum] =useState(0);

    const rambo = () =>{
        setNum(num + 1);
    }

  return (
    <div style={{margin: "200px "}}>
    <button onClick={rambo} style={{backgroundColor: "red" }}>
       hello { num }
    </button>

    </div>
  )
}

export default Header