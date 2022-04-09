import { Body, Controller, Post } from '@nestjs/common';
import { GetSampleLogDto } from 'src/api/structure/sample/get-sample-log.dto';

@Controller('sample')
export class SampleController {
  @Post('log')
  async getLog(@Body() _payload: GetSampleLogDto) {
    return {};
  }
}
