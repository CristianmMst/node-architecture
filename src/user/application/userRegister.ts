import zod from "zod";
import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

const registerUserSchema = zod.object({
  email: zod.string().email(),
  username: zod.string().min(3),
  password: zod.string().min(6),
});

export class UserRegister {
  constructor(private readonly userRepository: UserRepository) {}

  async run(
    id: string,
    email: string,
    username: string,
    password: string,
  ): Promise<void> {
    const { error } = registerUserSchema.safeParse({
      email,
      username,
      password,
    });

    if (error) {
      throw new Error(`${error.issues[0].path} ${error.issues[0].message}`);
    }

    const user = new User(id, email, username, password);
    return this.userRepository.register(user);
  }

  validate(username: string, email: string): void {
    if (!email || !username) {
      throw new Error("Missing data");
    }
  }
}
