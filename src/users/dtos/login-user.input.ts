import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class LoginUserInput {
  @IsString()
  @Field(() => String, { description: 'email of the user' })
  email: string;

  @IsString()
  @Field(() => String, { description: 'password of the user' })
  password: string;
}
