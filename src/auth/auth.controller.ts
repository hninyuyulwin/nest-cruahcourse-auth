import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  constructor(private authService : AuthService){}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  // login(@Body() loginDto : LoginDto){
  //   return this.authService.validateuser(loginDto.email, loginDto.password);
  // }
  login(@Request() req : any){
    // return req.user;
    return this.authService.login(req.user);
  }
}
