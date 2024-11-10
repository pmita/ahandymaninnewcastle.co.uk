import { CollectionReference, Query, DocumentData, Timestamp } from 'firebase-admin/firestore';

export type CollectionRefServerSide = CollectionReference<DocumentData> | Query<DocumentData>;

export interface IFirestoreFilters {
  limit?: number | null;
  status?: string | null;
  sort?: string | null;
  startAfter?: number | Date | null;
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

export interface IQueryItem extends FirebaseFirestore.DocumentData {
  id: string;
  email: string;
  fullName: string;
  mobile: string;
  additionalInfo: string;
  status: QUERY_STATUS;
  createdAt: number | string;
  updatedAt: number | string;
}

export type IComments = {
  content: string;
  createdAt: number | string;
  status: QUERY_STATUS;
  updatedAt: number | string;
  id: string;
}
