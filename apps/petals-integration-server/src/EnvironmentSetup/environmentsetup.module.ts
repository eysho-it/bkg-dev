import { Module } from "@nestjs/common";
import { EnvironmentSetupService } from "./environmentsetup.service";
import { EnvironmentSetupController } from "./environmentsetup.controller";
import { EnvironmentSetupResolver } from "./environmentsetup.resolver";

@Module({
  controllers: [EnvironmentSetupController],
  providers: [EnvironmentSetupService, EnvironmentSetupResolver],
  exports: [EnvironmentSetupService],
})
export class EnvironmentSetupModule {}
