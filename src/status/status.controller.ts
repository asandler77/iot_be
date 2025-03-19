import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { MqttService } from '../mqtt/mqtt.service';

@Controller('status')
export class StatusController {
  constructor(private readonly mqttService: MqttService) {}

  @Post()
  @HttpCode(200)
  handleState(@Body('state') state: boolean): string {
    this.mqttService.publishState(state);
    return 'State sent to lamp';
  }
}
