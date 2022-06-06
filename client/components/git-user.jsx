import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Head from './head'
import { history } from '../redux'

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

const GitUser = ({ setRepo }) => {
  const { userName } = useParams()
  const [repos, setRepos] = useState([])

  const url = `https://api.github.com/users/${userName}/repos`

  const onClick = (repoPath) => {
    setRepo(repoPath)
    history.push(`/${userName}/${repoPath}`)
  }

  useEffect(() => {
    console.log('my url ', url)
    axios.get(url)
    .then((r) => {
      console.log('resp1:', r.data)
      return r.data
    })
    .then((arr) => {
      if (Array.isArray(arr)) {
        console.log('resp2:', arr)
        setRepos(arr)
      } else {
        throw new Error(`Something is wrong. Got ${arr}`)
      }
    })
    .catch((err) => console.log(err))
  }, [url])
  
  return (
    <div>
      <Head title="GitUser" />
      <Header {...{ userName }} />
      <table className="flex flex-col mx-4 items-center">
        <tbody>
          <tr>
            <th>Repository List</th>
          </tr>
          {repos.map((repoObj) => {
            return (
              <tr key={repoObj.id}>
                <td>
                  <button type="button" onClick={() => onClick(repoObj.name)}>{repoObj.name}</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>)
}

GitUser.propTypes = {}

export default React.memo(GitUser)