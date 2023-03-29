import { Router } from "express";
import AuthController from "../controller/auth.controller";
import { Routes } from "../interface/routes.interface";
import AuthValidation from "../validation/validation";
import validate from "../validation/validationMiddleware";

class AuthRoute implements Routes {
  public path = "/";
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}login`, validate(AuthValidation),this.authController.logIn);
    this.router.post(`${this.path}signup`,validate(AuthValidation),this.authController.signUp
    );
  }
}

export default AuthRoute;
