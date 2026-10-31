import { Controller, Get, Post, Body } from '@nestjs/common';
import { registerEmailDto } from './dto/register-email.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @Get('register')
    getRegister(){
        return `hai ${process.env.USERNAME}`;
    }

    @Post('register')
    register(@Body() dto: registerEmailDto) {
        this.authService.registerEmail(dto.email);
    }
}
