import React, { useState } from 'react'

import Head from './head'

import { history } from '../redux'


const Home = ({setUser}) => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onClick = () => {
    setUser(value)
    history.push(`/${value}`)
  }

  return (
    <div>
      <Head title="Dashboard" />
      <input 
        type="text"
        value={value}
        onChange={onChange}
      />
      <button 
        type="button"
        id="search-button"
        onClick={onClick}
      >
        Enter
      </button>
    </div>
  )
}

Home.propTypes = {}

export default Home
