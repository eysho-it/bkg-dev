import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ModelHostingService } from "./modelhosting.service";

@swagger.ApiTags("modelHostings")
@common.Controller("modelHostings")
export class ModelHostingController {
  constructor(protected readonly service: ModelHostingService) {}

  @common.Post("/host-stable-beluga2")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HostStableBeluga2(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.HostStableBeluga2(body);
      }
}
