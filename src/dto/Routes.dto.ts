export type IPath =
  | '/'
  | '/dashboard'
  | '/payments'
  | '/sessions'
  | '/login'
  | '/profile'
  | '/loading'
  | '/forbidden';

export interface IRoute {
  path: IPath;
  component: React.ReactNode;
}
