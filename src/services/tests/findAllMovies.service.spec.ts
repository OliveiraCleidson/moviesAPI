import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { FakeMoviesRepository } from '@repositories/fakes/fakeMovies.repository';
import { MoviesRepository } from '@repositories/movies.repository';
import { FindAllMoviesService } from '@services/findAllMovies.service';

describe('Find All Movies Service', () => {
  let moviesRepository: MoviesRepository;
  let findAllMovies: FindAllMoviesService;

  beforeEach(async () => {
    moviesRepository = new FakeMoviesRepository();
    findAllMovies = new FindAllMoviesService(moviesRepository);
  });

  it('should findAll movies, returning an array', async () => {
    const entities = await findAllMovies.execute();
    expect(entities).toBeInstanceOf(Array);
  });
});
