import { IsDefined, IsNumber, IsString } from 'class-validator';
import { CategoryEnum } from 'src/entities/category.enum';
import { MovieEntity } from 'src/entities/movie.entity';

export class CreateMovieDTO implements Omit<MovieEntity, 'id'> {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsNumber()
  rate: number;

  @IsString()
  description?: string;

  @IsString()
  @IsDefined()
  category: CategoryEnum;
}
