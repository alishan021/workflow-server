
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {

    @Prop()
    name?: string;

    @Prop({ required: true, unique: true, lowercase: true, trim: true })
    email!: string;

    @Prop()
    password?: string;

    @Prop({ default: false })
    isEmailVerified!: boolean;

    // @Prop()
    // userRole userRole

    @Prop()
    avatarUrl?: string;

}

export const UserSchema = SchemaFactory.createForClass( User);