import {InvitationServiceToken} from "@/shares";
import {InvitationService} from "@/modules/Invitation/services";
import {InvitationController} from "@/modules/Invitation/controllers";
import { Module } from "@nestjs/common";
import {UserClassModule} from "@/modules/userClass/module";
import {UserModule} from "@/modules/users/module";
import {ClassModule} from "@/modules/classes/module";

@Module({
  imports: [UserClassModule, UserModule, ClassModule],
  controllers: [InvitationController],
  providers: [
    {
      provide: InvitationServiceToken,
      useClass: InvitationService
    }
  ]
})
export class InvitationModule {}