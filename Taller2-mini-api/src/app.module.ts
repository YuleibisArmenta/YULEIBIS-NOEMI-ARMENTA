import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorModule } from './actor/actor.module';
import { DirectorModule } from './director/director.module';
import { MovieModule } from './movie/movie.module';
import { TheaterModule } from './theater/theater.module';

@Module({
  imports: [ActorModule, DirectorModule, MovieModule, TheaterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
