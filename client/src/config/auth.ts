import { jwtKey } from './environment';

export const getToken = (): string => localStorage.getItem(jwtKey)!;

export const setToken = (token: string) => localStorage.setItem(jwtKey, token);

export const getUser = () => ({});
