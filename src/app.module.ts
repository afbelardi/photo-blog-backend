import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photos/photo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PhotoModule, MongooseModule.forRootAsync({
    imports: [ConfigModule.forRoot()],
    inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
      uri: config.get<string>('MONGODB_URI')
})
})],
  controllers: [AppController],
  providers: [AppService],
  })
export class AppModule {}
