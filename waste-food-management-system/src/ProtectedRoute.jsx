import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <div>
      <Route {...rest} render={(props)=>{
        if(auth) return <Component {...props} />
        if(!auth) return <Redirect to={{path : '/login', state : {from : props.location}}} />
      }} />
    </div>
  );
};

export default ProtectedRoute;