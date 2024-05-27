import { Injectable } from "@nestjs/common";

@Injectable()
export class ModelHostingService {
  constructor() {}
  async HostStableBeluga2(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
