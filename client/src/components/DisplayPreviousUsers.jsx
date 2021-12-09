import './DisplayUsers.css'
import Navbar from './Navbar' 


import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { grabUserData, config, BASE_URL } from '../services'



function DisplayUsers() {
  
  const [toggle, setToggle] = useState(false)
  const [previousUsers, setPreviousUsers] = useState([])

  useEffect(() => {
    const getAllUserData = async () => {
      console.log(BASE_URL, config)
      const response = await axios.get(BASE_URL, config)
      console.log(response)
      setPreviousUsers(response)
    }
    getAllUserData()
  }, [toggle])

  console.log(previousUsers)





  return (
    <div>
      <Navbar />
      <body className='body'>
      
      </body>
    </div>
  )
}