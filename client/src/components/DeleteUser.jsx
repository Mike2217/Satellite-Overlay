import { grabUserData } from './services'
import axios from 'axios'
import { useState, useEffect } from 'react'


function DeleteUser() {
  useEffect(() => {
    const deleteTargetUser = async () => {
      const response = await deleteUserData()
      console.log(response)
      setPreviousUsers(response)
    }
    deleteTargetUser()
  }, [toggle])


  return (
    <button onClick={DeleteUser}>Delete Data</button>
  )
}
export default DeleteUser