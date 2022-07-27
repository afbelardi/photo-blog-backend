import { Body,
    Query,
    Param,
    BadRequestException,
    Controller,
    Get,
    Post,
    Put,
    Patch,
    Delete,
    UseGuards,
    Req } from '@nestjs/common';
import { PhotoDTO } from './photo.dto';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';

@Controller('photos')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}


    @Post('')
    async createPhoto(
        @Body() photo: PhotoDTO,
    ): Promise<Photo> {
        try {
            return await this.photoService.createPhoto(photo)
        } catch(error) {
            throw new BadRequestException(error.message);
        }
    }


    @Get('')
    async getAllPhotos(): Promise<Photo[]> {
        try {
            return await this.photoService.getAllPhotos()
        }catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get(':id')
    async getPhotoById(id) {
        try {
            console.log(id)
            // return await this.photoService.getPhotoById(id)
        } catch(error) {
            throw new BadRequestException(error.message);
        }
    }
}
