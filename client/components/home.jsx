import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Head from './head'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }


  return (
    <div>
      <Head title="Dashboard" />
      <input 
        type="text"
        value={value}
        onChange={onChange}
      />
      <img alt="wave" src="images/wave.jpg" />
      <button type="button" onClick={() => setCounterNew(counter + 1)}>
        updateCounter
      </button>
      <div> Hello World Dashboard {counter} </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
