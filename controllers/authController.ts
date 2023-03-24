import { Request, Response } from "express";

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
}
export const authController = new AuthController();