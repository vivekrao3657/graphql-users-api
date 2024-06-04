import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users_data } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(users_data)
    private repo: Repository<users_data>,
  ) {}

  async create(
    username: string,
    email: string,
    password: string,
  ): Promise<users_data> {
    return this.repo.save(this.repo.create({ username, email, password }));
  }

  async findAll(): Promise<users_data[]> {
    return this.repo.find();
  }

  async findOneByUsername(username: string): Promise<users_data | undefined> {
    return this.repo.findOne({ where: { username } });
  }

  async validateUser(username: string, password: string): Promise<boolean> {
    const user = await this.findOneByUsername(username);
    return user && user.password === password;
  }
}
