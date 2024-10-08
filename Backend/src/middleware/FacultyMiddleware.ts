

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();


 const SECRET = process.env.JWT_SECRET!;


interface AuthenticatedRequest extends Request {
    user?: any; // or whatever type your user object is
  }


const authenticateAccess = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err:any, user:any) => {
      if (err) {
        return res.sendStatus(403);
      }
      // If verification is successful, attach user to request object
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export { authenticateAccess, SECRET };
