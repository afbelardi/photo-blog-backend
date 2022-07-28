import {
    IsString,
    IsInt,
    IsOptional
} from 'class-validator';

export interface PhotoDTO {
    
    url: string;
    dateTaken: string;
    placeTaken: string;

}

export interface UpdatePhotoDTO {

    IsOptional()
    url: string;

    IsOptional()
    dateTaken: string;

    IsOptional()
    placeTaken: number;

}