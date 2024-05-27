import * as graphql from "@nestjs/graphql";
import { EnvironmentSetupService } from "./environmentsetup.service";

export class EnvironmentSetupResolver {
  constructor(protected readonly service: EnvironmentSetupService) {}

  @graphql.Mutation(() => String)
  async SetupEnvironment(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SetupEnvironment(args);
  }
}
