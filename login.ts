/*
 * @Version:  ;
 * @Description:  ;
 * @Autor: Stock
 * @Date: 2020-12-22 00:56:58
 */
import {get,post} from './server';

export type LoginParamsType = {
  username: string;
  password: string;
};
export async function Login(params: LoginParamsType) {
  return post('/posts', {
    ...params,
  });
}
