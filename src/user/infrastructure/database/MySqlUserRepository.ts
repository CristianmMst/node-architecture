import mysql, { Pool, RowDataPacket } from "mysql2/promise";
import { User } from "../../domain/user";
import { UserRepository } from "../../domain/userRepository";

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

  async getAll(): Promise<User[]> {
    const [rows] = await this.client.query<MySQLUser[]>("SELECT * FROM users");
    return rows.map((row) => new User(row.email, row.username, row.password));
  }

  async findById(id: string): Promise<User | null> {
    const [rows] = await this.client.query<MySQLUser[]>(
      "SELECT * FROM users WHERE id = ?",
      [id],
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return new User(row.email, row.username, row.password);
  }

  async save(user: User): Promise<void> {
    await this.client.query(
      "INSERT INTO users (id, email, username, password) VALUES (?, ?, ?, ?)",
      [user.id, user.email, user.username, user.password],
    );
  }
}
