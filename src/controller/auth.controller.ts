import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth.service";

class AuthController {
  public authService = new AuthService();
  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = await this.authService.signup(req.body);
      res.status(200).json({ data: userData, message: "User added Successfully" });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = await this.authService.login(req.body);
      res.status(200).json({ data: userData, message: "User Successfully Login" });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
