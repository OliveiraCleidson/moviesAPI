import { CreateMovieDTO } from 'src/dtos/createMovie.dto';
import { UpdateMovieDTO } from 'src/dtos/updateMovie.dto';
import { MovieEntity } from 'src/entities/movie.entity';
import { MoviesRepository } from '../movies.repository';

export class FakeMoviesRepository implements MoviesRepository {
  private entities: MovieEntity[] = [];

  async findById(id: number): Promise<MovieEntity | undefined> {
    const entity = this.entities.find((search) => search.id === id);

    return entity ? { ...entity } : undefined;
  }

  async create(data: CreateMovieDTO): Promise<MovieEntity> {
    const entity = { ...data, id: this.generateNumberId() };

    this.entities.push(entity);

    return { ...entity };
  }

  async update(data: UpdateMovieDTO): Promise<MovieEntity> {
    const entity = this.entities.find((search) => search.id === data.id);

    if (!entity) {
      throw new Error('Entidade não encontrada');
    }

    const newArray = this.entities.filter((search) => search.id !== data.id);
    this.entities = newArray;

    const newEntity = Object.assign(entity, { ...data });
    this.entities.push(newEntity);

    return { ...newEntity };
  }

  async delete(id: number): Promise<void> {
    const indexOfEntity = this.entities.findIndex((search) => search.id === id);

    if (indexOfEntity < 0) {
      return;
    }

    this.entities.splice(indexOfEntity, 1);
  }

  async findAll(): Promise<MovieEntity[]> {
    return [...this.entities];
  }

  private generateNumberId(): number {
    if (this.entities.length === 0) {
      return 0;
    }

    return this.entities[this.entities.length - 1].id + 1;
  }
}
