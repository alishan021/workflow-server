import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    registerEmail(email: string) {
        console.log(email);
    }
}

