import {Entity, model, property} from '@loopback/repository';

@model()
export class Transaction extends Entity {
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
  transaction_count: number;

  @property({
    type: 'date',
    required: true,
  })
  bucket_start_date: string;

  @property({
    type: 'date',
    required: true,
  })
  bucket_end_date: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  transactions: object[];


  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
