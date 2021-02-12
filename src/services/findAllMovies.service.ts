import { MovieEntity } from '@entities/movie.entity';
import { Injectable } from '@nestjs/common';
import { MoviesRepository } from '@repositories/movies.repository';

@Injectable()
export class FindAllMoviesService {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(): Promise<MovieEntity[]> {
    const entities = await this.moviesRepository.findAll();

    return entities;
  }
}
