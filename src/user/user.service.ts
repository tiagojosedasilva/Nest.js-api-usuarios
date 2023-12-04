import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userReposiory: Repository<User>,
  ){}

  create(createUserDto: CreateUserDto) {
    return this.userReposiory.save(createUserDto);
  }

  findAll() {
    return this.userReposiory.find();
  }

  findOne(id: number) {
    return this.userReposiory.findBy({id: id});
  }

  update(id: number, updateUserDto: UpdateUserDto){
    return this.userReposiory.update(id, updateUserDto)
  }

  remove(id: number) {
    return this.userReposiory.delete(id);
  }
}
