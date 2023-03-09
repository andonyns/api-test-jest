import { saveData } from './db';

export type AuthResponse = AuthSuccessResponse | AuthFailureResponse;
export interface AuthSuccessResponse {
  success: true;
  name: string;
}
export interface AuthFailureResponse {
  success: false;
}

export function doAuth(): AuthResponse {
  return { success: true, name: 'Cheddar' };
}

export function addUser(name: string): number {
  saveData(name);
  

  return 200;

}