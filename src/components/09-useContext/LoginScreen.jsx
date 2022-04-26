import React, { useContext } from 'react'
import { close } from "./helper/closeNav";
import { UserContext } from './UserContexts';
export const LoginScreen = () => {
  close();
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const datos = {
    id: 1234,
    name: 'Andres Sanchez',
    email: 'andresjose84@gmail.com'
  };
  return (
    <div>
      <h1>
        LoginScreen
      </h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={ () => setUser(datos) }
      >
        Ingresar
      </button>
    </div>
  )
}
