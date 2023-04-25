import React from 'react'
import '../components/Spinner.css'
function Spinner() {
  return (
    <div className='spin'>   
   <div className="  text-primary" role="status">
    <span>Loading...</span>
    <p>Please wait</p>
</div>
</div>

  )
}

export default Spinner