import { AuthRepository } from "../domain/authRepository";

export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}
  register = (user: any) => {
    this.authRepository.register(user);
    return "Register";
  };

  login = ({ email, password }: any) => {
    this.authRepository.login(email, password);
    return "Login";
  };
}
