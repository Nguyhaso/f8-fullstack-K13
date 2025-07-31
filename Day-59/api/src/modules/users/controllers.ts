import {Body, Controller, Delete, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {UserService} from "./services";
import {UserReq} from "./dtos";
import { ApiTags } from "@nestjs/swagger";
import {UserServiceToken} from "@/shares";
import {LoginReq} from "@/modules/Auth/dtos";

@ApiTags("User")
@Controller('/users')
export class UserController {
  constructor(
    @Inject(UserServiceToken)
    private userService: UserService) {
  }

  @Get()
  get(){
    return this.userService.find()
  }

  @Post('login')
  login(@Body() loginReq:LoginReq){
    return this.userService.login(loginReq)
  }

  @Post('create')
  async create(@Body()user :  UserReq) : Promise<any> {
    await this.userService.createUser(user)
    return {
      message: 'User created successfully',
      status: 'success',
    };
  }


  @Put('/:id')
  update(@Param('id') id: string, @Body()user: UserReq){
    return this.userService.updateOne(id, user)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.userService.softDelete(id)
  }
}