import React, { useState } from 'react'

import Head from './head'

import { history } from '../redux'

const Home = () => {
  const [value, setValue] = useState('')
  
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onClick = () => {
    history.push(`/${value}`)
  }

  return (
    <div className="flex justify-center items-center">
      <Head title="Dashboard" />
      <div className="flex flex-col bg-gray-100 rounded border m-2 p-4 space-y-2">
        <input
          className="rounded p-2"
          type="text"
          id="input-field"
          value={value}
          onChange={onChange}
        />
        <button
          className="border bg-gray-300 rounded p-2"
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
