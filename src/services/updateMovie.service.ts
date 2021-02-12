import { UpdateMovieDTO } from '@dtos/updateMovie.dto';
import { MovieEntity } from '@entities/movie.entity';
import { Injectable } from '@nestjs/common';
import { MoviesRepository } from '@repositories/movies.repository';

@Injectable()
export class UpdateMovieService {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(data: UpdateMovieDTO): Promise<MovieEntity> {
    const entities = await this.moviesRepository.update(data);

    return entities;
  }
}
