import {Entity, model, property} from '@loopback/repository';

@model()
export class Account extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  account_id: number;

  @property({
    type: 'number',
    required: true,
  })
  limit: number;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  products: string[];

  constructor(data?: Partial<Account>) {
    super(data);
  }
}

export interface AccountRelations {
  // describe navigational properties here
}

export type AccountWithRelations = Account & AccountRelations;
