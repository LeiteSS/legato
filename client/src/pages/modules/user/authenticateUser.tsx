import React from 'react';
import { useNavigate } from 'react-router-dom';
import authenticateUser from '../../../hooks/modules/user/authenticate/authenticateUserHook';
import getState from '../../../config/state';
import { setToken } from '../../../config/auth';
import { User } from '../../../models/modules/user/User';


export default function AuthenticatePage() {
  const [user, setUser] = React.useState<User>();
  const [passwordShown, setPasswordShown] = React.useState(false);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user!, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
  
    const userLogin = await getState(setUser);
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const userResponse = await authenticateUser(userLogin?.email!, userLogin?.email!);
    console.log(userResponse);
    if (userResponse) {
      setToken(userResponse!.token!);
      navigate('/users');
    }
  };

  return (
    <div>
      <div>
        <h3>Login</h3>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input
          name="password"
          type={passwordShown ? 'text' : 'password'}
          placeholder="Senha"
          onChange={handleChange}
        />

  
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}
