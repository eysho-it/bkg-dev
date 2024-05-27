import { Module } from "@nestjs/common";
import { ModelHostingService } from "./modelhosting.service";
import { ModelHostingController } from "./modelhosting.controller";
import { ModelHostingResolver } from "./modelhosting.resolver";

@Module({
  controllers: [ModelHostingController],
  providers: [ModelHostingService, ModelHostingResolver],
  exports: [ModelHostingService],
})
export class ModelHostingModule {}
