import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Header = () => {
  const { userName } = useParams()
  return (
    <div>
      <Head title="GitBrowser" />
      <div className="flex-wrap object-top items-center justify-center">
        <div className="bg-indigo-300  text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="repository-name" className="font-sans bg-indigo-600 flex flex-col items-center justify-center border rounded mb-2 p-2">
            <div>
              UserName
            </div>
            <div className="font-bold text-xl text-yellow-400">
              {userName}
            </div>
          </div>
          <div className="font-sans bg-indigo-600 hover:text-yellow-400 flex object-right justify-center border rounded mb-2 p-2">
            <Link id="go-back" to="/">
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const GitUser = () => {
return (
  <div>
    <Header />
  </div>)
}

GitUser.propTypes = {}

export default React.memo(GitUser)
