import { SignOptions } from './../../node_modules/@types/jsonwebtoken/index.d';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constant';
import { JwtStrategy } from './autjwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports : [UserModule, PassportModule, 
    JwtModule.register({
      secret : jwtConstants.secret,
      signOptions : {expiresIn:'1h'}
    })
  ]
})
export class AuthModule {}
