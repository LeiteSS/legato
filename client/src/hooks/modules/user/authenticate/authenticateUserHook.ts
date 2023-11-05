import { NavigateFunction } from 'react-router-dom';
import Joi from 'joi';
import { User } from '../../../../models/modules/user/User';
import api from '../../../../service/api';

async function authenticateUser(
  user: User,
): Promise<User | null> {
  try {
    const response = await api.post('/api/v1/users/login', user);

    return response.data as User;
  } catch (error) {

    return null;
  }
}

export default authenticateUser;