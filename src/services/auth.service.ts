import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { configData } from "../config/config";
import { HttpException } from "../exceptions/HttpException";
import { DataStoredInToken, TokenData } from "../interface/auth.interface";
import { User } from "../interface/users.interface";
import userModel from "../models/users.model";
import { isEmpty } from "../utils/utils";

class AuthService {
  public users = userModel;

  public async signup(userData: any): Promise<any> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User|null = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(400, `This email ${userData.email} already exists`);
    const hashedPassword = await hash(userData.password, 10);

    const response = await this.users.create({
      ...userData,
      password:hashedPassword
    })
    return response;
  }

  public async login(userData: any): Promise<any> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User|null = await this.users.findOne({ email: userData.email });
    if (!findUser) throw new HttpException(400, `This email ${userData.email} does not exist`);
    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Password is not matching');

    const tokenData = this.createToken(findUser);
    return {findUser,tokenData};
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = configData.SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }
}

export default AuthService;
