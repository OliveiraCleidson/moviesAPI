import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateMovieService } from '@services/createMovie.service';

@Controller('movies')
export class MovieController {
  constructor(private createMovieService: CreateMovieService) {}

  @Post()
  async createMovie(@Body() data: CreateMovieDTO) {
    const savedMovie = await this.createMovieService.execute(data);

    return savedMovie;
  }
}
