export class MissingToken extends Error {
  constructor(message: string = "Missing token") {
    super(message);
    this.name = "MissingToken";
  }
}
