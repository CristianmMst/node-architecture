import crypto from "crypto";

export class User {
  id: string;
  email: string;
  username: string;
  password: string;

  constructor(email: string, username: string, password: string) {
    this.id = this.uuid();
    this.email = email;
    this.username = username;
    this.password = password;
  }

  private uuid(): string {
    return crypto.randomUUID();
  }
}
