import {
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  last_name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  organization: string;
}
