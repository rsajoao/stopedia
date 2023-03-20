import { NextFunction, Response } from 'express';
import CustomRequest from '../Interfaces/CustomRequest';
import LoginService from '../Services/Login.service';

export default class LoginController {
  private req: CustomRequest;
  private res: Response;
  private next: NextFunction;
  private service: LoginService;

  constructor(req: CustomRequest, res: Response, next: NextFunction) {
    this.req = req;
    this. res = res;
    this.next = next;
    this.service = new LoginService();
  }

  public async login() {
    try {
      const { body: { user, password } } = this.req;
      const token = await this.service.login(user, password);

      return this.res.status(200).json({ token });
    } catch (error) {
      this.next(error);
    }
  }
}