import { Request, Response } from "express";
import {User} from "../models/users";
class AuthController {

  public home(req: Request, res:Response) {
    return res.json({
      "menu": {
        "id": "file",
        "value": "File",
        "popup": {
          "menuitem": [
            { "value": "New", "onclick": "CreateNewDoc()" },
            { "value": "Open", "onclick": "OpenDoc()" },
            { "value": "Close", "onclick": "CloseDoc()" }
          ]
        }
      }
    });
  }

  public async login(req: Request, res: Response) {
    const user = await User.find(req.body);
    return res.json({...user})
  }
}
export const authController = new AuthController();