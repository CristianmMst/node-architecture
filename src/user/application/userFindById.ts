import { UserDto } from "./dtos/userDto";
import { UserRepository } from "../domain/userRepository";
import { UserNotFoundError } from "../domain/exceptions/userNotFoundError";

export class UserFindById {
  constructor(protected readonly userRepository: UserRepository) {}

  async run(id: string): Promise<UserDto> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new UserNotFoundError();

    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}
