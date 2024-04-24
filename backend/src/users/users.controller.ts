import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly userSerivce: UsersService) {}

  @Get('/')
  @UseGuards(AuthGuard('basic'))
  async getAllUsers() {
    return {
      success: true,
      errors: [],
      data: await this.userSerivce.getAllUsers(),
    };
  }

  @Post('/')
  @UseGuards(AuthGuard('basic'))
  async createNewUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return {
      success: true,
      errors: [],
      data: await this.userSerivce.createUser(createUserDto),
    };
  }

  @Get('/:id')
  @UseGuards(AuthGuard('basic'))
  async getUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userSerivce.getUserWithId(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      success: true,
      errors: [],
      data: user,
    };
  }

  @Delete('/:id')
  @UseGuards(AuthGuard('basic'))
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    await this.userSerivce.deleteUser(id);
  }
}
