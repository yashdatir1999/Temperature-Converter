import React, { useState } from 'react'

const Temperature = () => {
    const [celsius, setcelsius] = useState(0)
    const [fahrenheit, setfahrenheit] = useState(0)
    const changeCtoF = (e)=>{
        console.log(e.target.value)
        setcelsius(e.target.value)
        setfahrenheit((9/5 * e.target.value)+32)
    }

    const changeFtoC = (e)=>{
        console.log(e.target.value)
        setfahrenheit(e.target.value)
        setcelsius( (e.target.value - 32 )*5/9)
    }
  return (
    <div className=' screen-bg h-screen w-full flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold'>Temperature Converter</h1>
        <div className='contener h-40 w-3/12 flex flex-col px-2 justify-evenly py-10 items-center'>
            <p className='labelc'>Temperature in Celsius</p>
            <input
             className='w-full px-2 py-1 input'
             type="text" 
             placeholder='Celsius'
             name='celsius'
             onChange={(e)=> changeCtoF(e)}
             value={celsius}
            /> 
            <br />
            <p className='labelc'>Temperature in Fahrenheit</p>

            <input 
             className='w-full px-2 py-1 input'
             type="text" 
             name='fahrenheit'
             placeholder='Fahrenheit'
             onChange={(e)=> changeFtoC(e)}
             value={fahrenheit}
            />
        </div>
    </div>
  )
}

export default Temperature