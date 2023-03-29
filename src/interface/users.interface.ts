export interface User {
  _id: string;
  email: string;
  password: string;
  name?:string;
  image?:string;
  profileType?:string;
  phoneNumber?:string;
}
