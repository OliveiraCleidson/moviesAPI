import { CategoryEnum } from './category.enum';

export class MovieEntity {
  id: number;

  name: string;

  rate: number;

  description?: string;

  category: CategoryEnum;
}
