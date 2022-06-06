import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

import Head from './head'

const Header = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  return (
    <div>
      <Head title="GitUserRepo" />
      <div className="flex-wrap object-top items-center justify-center">
        <div className="bg-blue-200  text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="repository-name" className="font-sans bg-blue-700 flex flex-col items-center justify-center border rounded mb-2 p-2">
            <div>
              Repository Name
            </div>
            <div className="font-bold text-xl text-yellow-400">
              {repositoryName}
            </div>
          </div>
          <div className="font-sans bg-blue-700 hover:text-yellow-400 flex object-right justify-center border rounded mb-2 p-2">
            <Link id="go-repository-list" to={`/${userName}`}>
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const GitUserRepo = () => {
  const { userName, repositoryName } = useParams()
  const [ info, setInfo] = useState('')

  const url = `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`

  useEffect(() => {
    axios.get(url).then(readme => {
      setInfo(readme.data)
    }).catch('Readme.md file not found')
  }, [userName, repositoryName])

  return (
    <div>
      <Head title="GitUserRepo" />
      <Header/>
      <ReactMarkdown>{info}</ReactMarkdown>
    </div>
  )
}

GitUserRepo.propTypes = {}

export default React.memo(GitUserRepo)
