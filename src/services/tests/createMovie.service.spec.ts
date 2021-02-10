import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { FakeMoviesRepository } from '@repositories/fakes/fakeMovies.repository';
import { MoviesRepository } from '@repositories/movies.repository';
import { CreateMovieService } from '@services/createMovie.service';

describe('Create Movie Service', () => {
  let moviesRepository: MoviesRepository;
  let createMovieService: CreateMovieService;
  let createDTO: CreateMovieDTO;
  beforeEach(() => {
    moviesRepository = new FakeMoviesRepository();
    createMovieService = new CreateMovieService(moviesRepository);
    createDTO = {
      category: CategoryEnum.ACTION,
      name: 'Velozes e Furiosos',
      rate: 5,
      description: 'Um filme bom de mais da conta!',
    };
  });

  it('category should not be approved', async () => {
    expect(
      createMovieService.execute({
        ...createDTO,
        category: 97,
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
