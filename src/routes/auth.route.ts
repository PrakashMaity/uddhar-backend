import { Router } from "express";
import AuthController from "../controller/auth.controller";
import { Routes } from "../interface/routes.interface";

class AuthRoute implements Routes {
  public path = "/";
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}login`, this.authController.logIn);
    this.router.post(`${this.path}signup`, this.authController.signUp);
  }
}

export default AuthRoute;