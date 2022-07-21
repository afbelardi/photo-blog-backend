import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoSchema, Photo } from './photo.entity';

@Module({
  imports: [
    MongooseModule.forFeature(([{ name: Photo.name, schema: PhotoSchema }]))
  ],
  providers: [PhotoService],
  controllers: [PhotoController],
  exports: [PhotoService]
})
export class PhotoModule {}
