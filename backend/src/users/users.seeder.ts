import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersSeeder implements Seeder {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async seed(): Promise<any> {
    // Generate 10 users.
    const users = DataFactory.createForClass(User).generate(10);

    this.usersRepository.insert(users);
  }

  async drop(): Promise<any> {
    return this.usersRepository.clear();
  }
}
