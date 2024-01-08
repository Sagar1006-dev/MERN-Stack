import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className=' bg-gray-600 text-center text-3xl text-orange-700 p-4 shadow-lg'>User:{userid}</div>
  )
}

export default User