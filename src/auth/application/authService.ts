import { User } from "../../user/domain/user";
import { TokenService } from "./tokenService";
import { UserRepository } from "../../user/domain/userRepository";
import { comparePassword, hashPassword } from "../../shared/utils/hash";
import { UserNotFoundError } from "../../user/domain/userNotFoundError";

export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly userRepository: UserRepository,
  ) {}

  register = async (userData: User): Promise<void> => {
    const hashedPassword = await hashPassword(userData.password);
    const user = new User(userData.email, userData.username, hashedPassword);
    await this.userRepository.save(user);
  };

  login = async ({ email, password }: User): Promise<string> => {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new UserNotFoundError("User not found");

    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) throw new Error("Incorrect password");

    const token = this.tokenService.generateToken({ id: user.id });
    return token;
  };
}
