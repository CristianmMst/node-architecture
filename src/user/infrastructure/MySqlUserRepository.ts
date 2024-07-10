import { UserRepository } from "../domain/userRepository";
import mysql, { Pool, RowDataPacket } from "mysql2/promise";

import { User } from "../domain/user";
import { UserId } from "../domain/valueObjects/userId";
import { UserName } from "../domain/valueObjects/userName";
import { UserEmail } from "../domain/valueObjects/userEmail";
import { UserPassword } from "../domain/valueObjects/userPassword";

interface MySQLUser extends RowDataPacket {
  id: string;
  email: string;
  username: string;
  password: string;
}

export class MySqlUserRepository implements UserRepository {
  private readonly client: Pool;
  constructor() {
    this.client = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "melannie123",
      database: "prueba",
    });
  }

  async findById(id: UserId): Promise<User | null> {
    const [rows] = await this.client.query<MySQLUser[]>(
      "SELECT * FROM users WHERE id = ?",
      [id],
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return new User(
      new UserId(row.id),
      new UserEmail(row.email),
      new UserName(row.username),
      new UserPassword(row.password),
    );
  }

  async register(user: User): Promise<void> {
    await this.client.query(
      "INSERT INTO users (id, email, username, password) VALUES (?, ?, ?, ?)",
      [
        user.id.value,
        user.email.value,
        user.username.value,
        user.password.value,
      ],
    );
  }
}
