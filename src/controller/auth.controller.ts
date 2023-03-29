import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth.service";

class AuthController {
  public authService = new AuthService();
  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);

      const userData = await this.authService.signup(req.body);
      res.status(200).json({ data: userData, message: "Sign in" });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ data: "Hii I am From Login", message: "login" });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
