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
import { PhotoDTO, UpdatePhotoDTO } from './photo.dto';
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


    @Get()
    async getAllPhotos(): Promise<Photo[]> {
        try {
            return await this.photoService.getAllPhotos()
        }catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get(':id')
    async getPhotoById(@Param('id') id: string): Promise<Photo> {
        try {
            return await this.photoService.getPhotoById(id)
        } catch(error) {
            throw new BadRequestException(error.message);
        }
    }

    @Put(':id')
    async updatePhoto(
        @Param('id') id,
        @Body() photo: UpdatePhotoDTO
    ): Promise<Photo> {
        try {
            return await this.photoService.updatePhoto(id, photo)
        } catch(error) {
            throw new BadRequestException(error.message);
        }
    }
}
