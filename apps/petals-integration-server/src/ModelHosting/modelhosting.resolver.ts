import * as graphql from "@nestjs/graphql";
import { ModelHostingService } from "./modelhosting.service";

export class ModelHostingResolver {
  constructor(protected readonly service: ModelHostingService) {}

  @graphql.Mutation(() => String)
  async HostStableBeluga2(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.HostStableBeluga2(args);
  }
}
