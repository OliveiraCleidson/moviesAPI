import { CategoryEnum } from 'src/entities/category.enum';

export class UpdateMovieDTO {
  id: number;

  name?: string;

  rate?: number;

  description?: string;

  category?: CategoryEnum;
}
