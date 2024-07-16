import { Id } from "./valueObjects/Id";
import { Email } from "./valueObjects/Email";
import { Username } from "./valueObjects/Username";
import { Password } from "./valueObjects/Password";

export class User {
  readonly id: Id;
  readonly email: Email;
  readonly username: Username;
  readonly password: Password;

  constructor(id: Id, email: Email, username: Username, password: Password) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}
