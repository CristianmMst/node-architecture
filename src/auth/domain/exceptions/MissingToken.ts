export class Missingtoken extends Error {
  constructor(message: string = "Missing token") {
    super(message);
    this.name = "MissingToken";
  }
}
