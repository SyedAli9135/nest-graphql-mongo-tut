import { Field, InputType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class ListUsersInput {
  @IsNumber()
  @Field(() => Number, { description: 'classical limit' })
  limit: number;

  @IsNumber()
  @Field(() => Number, { description: 'classical offset' })
  offset: number;
}
