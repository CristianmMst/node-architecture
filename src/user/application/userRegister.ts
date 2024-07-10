import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";
import { UserId } from "../domain/valueObjects/userId";
import { UserName } from "../domain/valueObjects/userName";
import { UserEmail } from "../domain/valueObjects/userEmail";
import { UserPassword } from "../domain/valueObjects/userPassword";

export class UserRegister {
  constructor(private readonly userRepository: UserRepository) {}

  async run(
    id: string,
    username: string,
    email: string,
    password: string,
  ): Promise<void> {
    const user = new User(
      new UserId(id),
      new UserEmail(email),
      new UserName(username),
      new UserPassword(password),
    );
    return this.userRepository.register(user);
  }
}
