export interface User {
  _id: string;
  email: string;
  password: string;
  name?:string;
  image?:string;
  profileType?:string;
  phoneNumber?:string;
  subscription?:{
    subscriptionType?:string,
    isSubscribe?:boolean,
    startDate?:Date,
    endDate?:Date
  },
  settings?:{
    Currency?: string;
    Language?: string;
    Theme?: string;
  }
}
