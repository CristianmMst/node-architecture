import { UserId } from "./valueObjects/userId";
import { UserName } from "./valueObjects/userName";
import { UserEmail } from "./valueObjects/userEmail";
import { UserPassword } from "./valueObjects/userPassword";

export class User {
  readonly id: UserId;
  readonly email: UserEmail;
  readonly username: UserName;
  readonly password: UserPassword;

  constructor(
    id: UserId,
    email: UserEmail,
    username: UserName,
    password: UserPassword,
  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}
