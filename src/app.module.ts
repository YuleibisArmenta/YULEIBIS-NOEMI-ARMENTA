import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { ActorModule } from './actor/actor.module';
import { ActorController } from './actor/actor.controller';
import { TheaterModule } from './theater/theater.module';
import { DirectorController } from './director/director.controller';
import { DirectorModule } from './director/director.module';
import { MovieController } from './movie/movie.controller';

@Module({
  imports: [MovieModule, DirectorModule, TheaterModule, ActorModule],
  controllers: [AppController, DirectorController, MovieController, ActorController],
  providers: [AppService],
})
export class AppModule {}
