import { ResponseBaseModel } from './responseBaseModel';
export interface DataResponseModel<T> extends ResponseBaseModel{
  data:T[]
}
