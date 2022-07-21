import {
    IsString,
    IsInt
} from 'class-validator';

export interface PhotoDTO {
    
    url: string;
    dateTaken: number;
    placeTaken: string;

}