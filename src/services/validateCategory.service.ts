import { CategoryEnum } from '@entities/category.enum';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidateCategoryService {
  execute(category: any): boolean {
    if (!Object.values(CategoryEnum).includes(category)) {
      return false;
    }

    return true;
  }
}
