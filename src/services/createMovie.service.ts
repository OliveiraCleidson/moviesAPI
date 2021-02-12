import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { MovieEntity } from '@entities/movie.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MoviesRepository } from '@repositories/movies.repository';

@Injectable()
export class CreateMovieService {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(data: CreateMovieDTO): Promise<MovieEntity> {
    if (!Object.values(CategoryEnum).includes(data.category)) {
      throw new BadRequestException('Está categoria não é válida');
    }

    const movie = await this.moviesRepository.create(data);

    return movie;
  }
}
