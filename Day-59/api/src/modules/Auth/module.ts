import {Module} from "@nestjs/common";
import {UserModule} from "@/modules/users/module";
import {AuthController} from "@/modules/Auth/controllers";

@Module({
  imports: [UserModule],
  controllers: [AuthController]
})

export class AuthModule {}