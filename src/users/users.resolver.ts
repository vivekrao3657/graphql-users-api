import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { users_data } from './users.entity';
import { UsersService } from './users.service';

@Resolver(() => users_data)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [users_data])
  async getAllUsers(): Promise<users_data[]> {
    return await this.usersService.findAll();
  }

  @Query(() => users_data, { nullable: true })
  async getUserProfile(
    @Args('username') username: string,
  ): Promise<users_data> {
    return await this.usersService.findOneByUsername(username);
  }

  @Mutation(() => users_data)
  async signup(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<users_data> {
    return await this.usersService.create(username, email, password);
  }

  @Mutation(() => Boolean)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<boolean> {
    return await this.usersService.validateUser(username, password);
  }
}
