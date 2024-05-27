import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EnvironmentSetupService } from "./environmentsetup.service";

@swagger.ApiTags("environmentSetups")
@common.Controller("environmentSetups")
export class EnvironmentSetupController {
  constructor(protected readonly service: EnvironmentSetupService) {}

  @common.Post("/setup-environment")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SetupEnvironment(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SetupEnvironment(body);
      }
}
