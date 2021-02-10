import { CategoryEnum } from 'src/entities/category.enum';
import { MovieEntity } from 'src/entities/movie.entity';

export class CreateMovieDTO implements Omit<MovieEntity, 'id'> {
  name: string;

  rate: number;

  description?: string;

  category: CategoryEnum;
}
