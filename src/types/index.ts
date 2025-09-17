export type { IBook, Genre } from "./book.type";

export interface IMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: IMeta;
}
