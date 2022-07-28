import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Photo, PhotoDocument } from './photo.entity';
import { Model } from 'mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { UpdatePhotoDTO } from './photo.dto';

@Injectable()
export class PhotoService {
    constructor(
        @InjectModel(Photo.name) private photoModel: Model<PhotoDocument>
    ) {}

    async createPhoto(photo): Promise<Photo> {
        const newPhoto = new Photo();
        newPhoto.url = photo.url;
        newPhoto.dateTaken = photo.dateTaken;
        newPhoto.placeTaken = photo.placeTaken;
        return await this.photoModel.create(newPhoto);
    }

    async getAllPhotos(): Promise<Photo[]> {
        return await this.photoModel.find().sort({ createdAt: -1});
    }

    async getPhotoById(id): Promise<Photo> {
        return await this.photoModel.findById(id)
    }

    async updatePhoto(id: string, photo: UpdatePhotoDTO): Promise<Photo> {
        return await this.photoModel.findByIdAndUpdate(id, { ...photo }, { new: true });
    }
}


