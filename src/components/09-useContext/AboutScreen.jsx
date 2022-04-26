import React, { useContext } from 'react'
import { close } from "./helper/closeNav";
import { UserContext } from './UserContexts';
export const AboutScreen = () => {
  close();
  const {user, setUser} = useContext(UserContext);
  const handleClick = () => {
    setUser({});
  };
  return (
    <div>
        <h1>
        AboutScreen
        </h1>
        <hr/>
        <pre>
          {JSON.stringify(user,null,3)}
        </pre>
        <button
          className='btn btn-warning'
          onClick={handleClick}
        >
          Logout          
        </button>
    </div>
  )
}
