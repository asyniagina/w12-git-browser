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
    <div className="flex justify-center items-center">
      <Head title="Dashboard" />
      <div className="flex flex-col bg-gray-100 rounded border m-2 p-4 space-y-2">
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
    </div>
  )
}

Home.propTypes = {}

export default Home
