import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.first_name = createUserDto.first_name;
    newUser.last_name = createUserDto.last_name;
    newUser.email = createUserDto.email;
    newUser.organization = createUserDto.organization;
    return this.usersRepository.save(newUser);
  }

  getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getUserWithId(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
