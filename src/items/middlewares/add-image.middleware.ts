import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AddImageMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
      console.log(req.body.item)
    // req.body.item.images = [];
    // req.body.images.forEach(img => {
    //     const image = {
    //       image: img.filename
    //     };
    //     item.images.push(image);
    // });
    next();
  }
}