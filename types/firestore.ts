import { CollectionReference, Query, DocumentData, Timestamp } from 'firebase-admin/firestore';

export type CollectionRefServerSide = CollectionReference<DocumentData> | Query<DocumentData>;

export interface IFirestoreFilters {
  numberOfItems?: number | null;
  status?: string | null;
  sort?: string | null;
  lastItem?: string | Timestamp | null;
}

export enum QUERY_STATUS {
  INITIAL = 'INITIAL',
  PROGRESSED = 'PROGRESSED',
  COMPLETED = 'COMPLETED',
}

export enum ORDER_BY {
  ASC = 'asc',
  DESC = 'desc',
}