import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusController } from './status/status.controller';
import {MqttService} from './mqtt/mqtt.service'

@Module({
  imports: [],
  controllers: [AppController, StatusController],
  providers: [AppService, MqttService],
})
export class AppModule {}
