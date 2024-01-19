import React from 'react'
import loading from '../../../Images/loading.jpg'
import "./Loader.css"

const Loader = () => {
  return (
    <div className="loader_container">
      <img src={loading} alt="loading" />
      <p>Please do not refresh page</p>
    </div>
  )
}

export default Loader