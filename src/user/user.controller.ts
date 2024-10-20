import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService : UserService){}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll(){
    return this.userService.get()
  }

  @Get(':id')
  findOne(@Param('id' , ParseIntPipe) id :number){
    return this.userService.findOne(id)
  }

  @Post()
  create(@Body() createDto : CreateUserDto){
    return this.userService.create(createDto);
  }

  @Patch(":id")
  update(@Param('id', ParseIntPipe) id :number,@Body() updateDto : CreateUserDto)
  {
    return this.userService.update(id,updateDto)
  }

  @Delete(':id')
  delete(@Param('id' , ParseIntPipe) id : number){
    return this.userService.delete(id)
  }
}
