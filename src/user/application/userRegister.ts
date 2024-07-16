import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";
import { Id } from "../domain/valueObjects/Id";
import { Email } from "../domain/valueObjects/Email";
import { Password } from "../domain/valueObjects/Password";
import { Username } from "../domain/valueObjects/Username";

export class UserRegister {
  constructor(private readonly userRepository: UserRepository) {}

  async run(
    id: string,
    email: string,
    username: string,
    password: string,
  ): Promise<void> {
    this.validate(username, email);
    const user = new User(
      new Id(id),
      new Email(email),
      new Username(username),
      new Password(password),
    );
    return this.userRepository.register(user);
  }

  validate(username: string, email: string): void {
    if (!email || !username) {
      throw new Error("Missing data");
    }
  }
}
