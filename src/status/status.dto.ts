import { IsBoolean } from 'class-validator';

export class StateDto {
  @IsBoolean()
  state: boolean;
}
