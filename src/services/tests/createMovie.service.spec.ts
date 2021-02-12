import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { FakeMoviesRepository } from '@repositories/fakes/fakeMovies.repository';
import { MoviesRepository } from '@repositories/movies.repository';
import { CreateMovieService } from '@services/createMovie.service';
import { ValidateCategoryService } from '@services/validateCategory.service';

describe('Create Movie Service', () => {
  let moviesRepository: MoviesRepository;
  let createMovieService: CreateMovieService;
  let createDTO: CreateMovieDTO;
  let validateCategory: ValidateCategoryService;
  beforeEach(() => {
    moviesRepository = new FakeMoviesRepository();
    validateCategory = new ValidateCategoryService();

    createMovieService = new CreateMovieService(
      moviesRepository,
      validateCategory,
    );

    createDTO = {
      category: CategoryEnum.ACTION,
      name: 'Velozes e Furiosos 5',
      rate: 5,
      description: 'Um filme bom de mais da conta!',
    };
  });

  it('category should not be approved', async () => {
    await expect(
      createMovieService.execute({
        ...createDTO,
        category: '97' as CategoryEnum,
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should create a movie', async () => {
    await expect(createMovieService.execute(createDTO)).resolves.toMatchObject(
      createDTO,
    );
  });
});
