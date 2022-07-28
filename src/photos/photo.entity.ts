import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Mongoose, Document } from "mongoose";

export type PhotoDocument = Photo & Document;


@Schema()
export class Photo {
    // _id!: mongoose.Types.ObjectId;

    @Prop()
    public url: string;

    @Prop()
    public dateTaken: string;

    @Prop()
    public placeTaken: string;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);