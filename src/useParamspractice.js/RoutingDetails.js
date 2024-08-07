import React from 'react'
import { useParams } from 'react-router-dom'

const RoutingDetails = () => {
    const {id}=useParams()
  return (
    <h1>hello{id}
    </h1>
  )
}

export default RoutingDetails