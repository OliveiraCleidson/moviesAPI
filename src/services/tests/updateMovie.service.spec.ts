import { UpdateMovieDTO } from '@dtos/updateMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { FakeMoviesRepository } from '@repositories/fakes/fakeMovies.repository';
import { MoviesRepository } from '@repositories/movies.repository';
import { UpdateMovieService } from '@services/updateMovie.service';
import { ValidateCategoryService } from '@services/validateCategory.service';

describe('Find All Movies Service', () => {
  let moviesRepository: MoviesRepository;
  let updateMovieService: UpdateMovieService;
  let updateDTO: UpdateMovieDTO;
  let validateCategory: ValidateCategoryService;
  beforeEach(async () => {
    moviesRepository = new FakeMoviesRepository();
    validateCategory = new ValidateCategoryService();
    updateMovieService = new UpdateMovieService(
      moviesRepository,
      validateCategory,
    );

    const savedMovie = await moviesRepository.create({
      category: CategoryEnum.ACTION,
      name: 'Iagod da Depressão',
      rate: 5,
      description:
        'Um drame de um garoto tentando aprender fazer APIs com NodeJS',
    });

    updateDTO = { ...savedMovie, name: 'Oliv da Depressão' };
  });

  it('should update movie', async () => {
    const result = await updateMovieService.execute(updateDTO);
    expect(result).toMatchObject({ name: updateDTO.name });
  });

  it('should not update if categoryEnum is invalid', async () => {
    await expect(
      updateMovieService.execute({
        ...updateDTO,
        category: '991' as CategoryEnum,
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
