import { Body, Controller, Post } from '@nestjs/common';
import { IsNumber, IsOptional } from 'class-validator';

export class GetSampleLogDto {
  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  take!: number;
}

@Controller('sample')
export class SampleController {
  @Post('log')
  async getLog(@Body() _payload: GetSampleLogDto) {
    return {};
  }
}
