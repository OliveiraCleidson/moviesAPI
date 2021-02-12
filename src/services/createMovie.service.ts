import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { MovieEntity } from '@entities/movie.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MoviesRepository } from '@repositories/movies.repository';
import { ValidateCategoryService } from './validateCategory.service';

@Injectable()
export class CreateMovieService {
  constructor(
    private moviesRepository: MoviesRepository,
    private validateCategory: ValidateCategoryService,
  ) {}

  async execute(data: CreateMovieDTO): Promise<MovieEntity> {
    const isCategoryValid = this.validateCategory.execute(data.category);

    if (!isCategoryValid) {
      throw new BadRequestException('A categoria deve ser válida!');
    }

    const movie = await this.moviesRepository.create(data);

    return movie;
  }
}
