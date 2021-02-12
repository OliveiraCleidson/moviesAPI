import { UpdateMovieDTO } from '@dtos/updateMovie.dto';
import { MovieEntity } from '@entities/movie.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MoviesRepository } from '@repositories/movies.repository';
import { ValidateCategoryService } from './validateCategory.service';

@Injectable()
export class UpdateMovieService {
  constructor(
    private moviesRepository: MoviesRepository,
    private validateCategory: ValidateCategoryService,
  ) {}

  async execute(data: UpdateMovieDTO): Promise<MovieEntity> {
    const categoryIsValid = this.validateCategory.execute(data.category);

    if (!categoryIsValid) {
      throw new BadRequestException('A categoria deve ser válida!');
    }

    const entities = await this.moviesRepository.update(data);

    return entities;
  }
}
