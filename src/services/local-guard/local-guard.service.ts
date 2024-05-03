import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";

@Injectable()
export class LocalGuardService extends AuthGuard('local'){
    handleRequest(err, user, info, context, status) {
        const request = context.switchToHttp().getRequest();
        const { login, psw } = request.body;
        if (err || !user) {
            if (!login) {
                throw new HttpException({ message: 'No exist ' }, HttpStatus.OK);
            } else if (!psw) {
                throw new HttpException({ message: 'No exist ' }, HttpStatus.OK);
            } else {
                throw err || new UnauthorizedException();
            }
        }
        return user;
    }
}
