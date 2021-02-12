import { MovieController } from '@controllers/movie.controller';
import { Module } from '@nestjs/common';
import { FakeMoviesRepository } from '@repositories/fakes/fakeMovies.repository';
import { MoviesRepository } from '@repositories/movies.repository';
import { FindAllMoviesService } from '@services/findAllMovies.service';
import { UpdateMovieService } from '@services/updateMovie.service';
import { ValidateCategoryService } from '@services/validateCategory.service';
import { CreateMovieService } from './services/createMovie.service';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [
    CreateMovieService,
    UpdateMovieService,
    ValidateCategoryService,
    FindAllMoviesService,
    { provide: MoviesRepository, useClass: FakeMoviesRepository },
  ],
})
export class AppModule {}
