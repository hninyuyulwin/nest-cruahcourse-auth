import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
    private userRepository : Repository<User>){}

    get() : Promise<User[]>{
      return this.userRepository.find();
    }

    findOne(id : number) : Promise<User>{
      return this.userRepository.findOne({where : {id:id}});
    }

    create(createDto : CreateUserDto){
      return this.userRepository.save(createDto) ;
    }

    update(id : number, createDto : CreateUserDto){
      return this.userRepository.update(id,createDto);
    }

    delete(id : number){
      return this.userRepository.delete(id)
    }

    findByEmail(email:string) : Promise<User>{
      return this.userRepository.findOne({where:{email:email}});
    }
}
