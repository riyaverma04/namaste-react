import React ,{useEffect} from 'react'
import Resturants from './Resturants'

const Body = () => {
  useEffect(()=>{
    console.log("use effect called");
    const timer = setInterval(()=>{
      console.log("use effect called after 1 second");
    }, 1000)
    return ()=>{
      //cleanup function
      clearInterval(timer)
    }

  },[])
  return (
    <div>
      <h1>Resturants</h1>
      {/* showing resturants her  */}
      <Resturants/>
      
      
    </div>
  )
}

export default Body
