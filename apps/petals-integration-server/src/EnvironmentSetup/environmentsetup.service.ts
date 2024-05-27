import { Injectable } from "@nestjs/common";

@Injectable()
export class EnvironmentSetupService {
  constructor() {}
  async SetupEnvironment(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
