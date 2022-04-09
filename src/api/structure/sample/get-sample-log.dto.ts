import { IsNumber, IsOptional } from 'class-validator';
export class GetSampleLogDto {
  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  take!: number;
}
