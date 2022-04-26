import React, { useContext } from 'react';
import { close } from "./helper/closeNav";
import { UserContext } from './UserContexts';
export const HomeScreen = () => {
  close();

  const {user} = useContext(UserContext);
  console.log(user);

  return (
    <div>
        <h1>
            HomeScreen
        </h1>
        <hr/>
        <pre className="container">
          { JSON.stringify(user,null,3) }
        </pre>
    </div>
  )
}
