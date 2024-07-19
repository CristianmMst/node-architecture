import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";
import mysql, { Pool, RowDataPacket } from "mysql2/promise";

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

  async findById(id: string): Promise<User | null> {
    const [rows] = await this.client.query<MySQLUser[]>(
      "SELECT * FROM users WHERE id = ?",
      [id],
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return new User(row.id, row.email, row.username, row.password);
  }

  async register(user: User): Promise<void> {
    await this.client.query(
      "INSERT INTO users (id, email, username, password) VALUES (?, ?, ?, ?)",
      [user.id, user.email, user.username, user.password],
    );
  }
}
