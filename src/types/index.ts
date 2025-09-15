export type { IBook } from "./book.type";

export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
