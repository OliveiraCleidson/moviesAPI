import { CreateMovieDTO } from 'src/dtos/createMovie.dto';
import { UpdateMovieDTO } from 'src/dtos/updateMovie.dto';
import { MovieEntity } from 'src/entities/movie.entity';

export abstract class MoviesRepository {
  abstract findById(id: number): Promise<MovieEntity | undefined>;

  abstract create(data: CreateMovieDTO): Promise<MovieEntity>;

  abstract update(data: UpdateMovieDTO): Promise<MovieEntity>;

  abstract delete(id: number): Promise<void>;

  abstract findAll(): Promise<MovieEntity[]>;
}
