import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';

@InputType()
export class Address {
  @Field(() => String)
  street: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  zip: string;
}

@InputType()
export class CreateUserInput {
  @IsString()
  @Field(() => String, { description: 'first name of the user' })
  firstName: string;

  @IsString()
  @Field(() => String, { description: 'last name of the user' })
  lastName: string;

  @IsString()
  @Field(() => String, { description: 'email of the user' })
  email: string;

  @IsString()
  @Field(() => String, { description: 'role of the user' })
  role: string;

  @IsString()
  @Field(() => String, { description: 'password of the user' })
  password: string;

  @IsArray()
  @Field(() => [Address])
  addresses: Array<Address>;
}
