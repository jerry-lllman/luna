import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) { }

  createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data
    })
  }

  findById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }
}
