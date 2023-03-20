import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = ({auth, component:Component, ...rest}) => {
  return (
    <div>
        <Outlet {...rest} render={(props)=>{
            if(auth) return <Component {...props} />
            if(!auth) return <Navigate to={{path : '/', state : {from : props.location}}} />
        }} />
    </div>
  )
}

export default ProtectedRoute;