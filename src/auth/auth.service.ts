import { LoginDto } from './dto/login.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

  constructor(
    private userService : UserService,
    private jwtService : JwtService
  ){}

  async validateuser(email:string, password:string)
  {
    const user = await this.userService.findByEmail(email);
    if(user && user.password === password){
      return user;
    }
    return null;
  }

  async login(user : any)
  {
    const payload = {id : user.id,email : user.email};
    return {
      access_token : this.jwtService.sign(payload)
    }
  }
}
