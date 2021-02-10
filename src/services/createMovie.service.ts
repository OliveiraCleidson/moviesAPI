import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { MovieEntity } from '@entities/movie.entity';
import { Injectable } from '@nestjs/common';
import { MoviesRepository } from '@repositories/movies.repository';

@Injectable()
export class CreateMovieService {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(data: CreateMovieDTO): Promise<MovieEntity> {
    const movie = await this.moviesRepository.create(data);

    return movie;
  }
}
