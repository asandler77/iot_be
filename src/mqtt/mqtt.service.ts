import { Injectable, OnModuleInit } from '@nestjs/common';
import * as mqtt from 'mqtt';

@Injectable()
export class MqttService implements OnModuleInit {
  private client: mqtt.MqttClient;

  onModuleInit() {
    this.client = mqtt.connect('mqtt://localhost:1883'); // Change host if needed

    this.client.on('connect', () => {
      console.log('✅ Connected to MQTT broker');
    });

    this.client.on('error', (err) => {
      console.error('❌ MQTT Error:', err);
    });
  }

  publishState(state: boolean) {
    try {
      const topic = 'lamp/state';
      const message = JSON.stringify({ state });
  
      this.client.publish(topic, message, {}, (err) => {
        if (err) {
          console.error('❌ Failed to publish:', err);
        } else {
          console.log(`📡 Sent to ${topic}: ${message}`);
        }
      });
    } catch (error) {
      console.error('❌ Error in publishState:', error);
    }
  }
}
