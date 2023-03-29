
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';


class AuthService {
  // public users = userModel;

  public async signup(userData: any): Promise<any> {
    // if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    // const findUser: User = await this.users.findOne({ email: userData.email });
    // if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    // const hashedPassword = await hash(userData.password, 10);
    // const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });

    return userData;
  }

  
}

export default AuthService;
