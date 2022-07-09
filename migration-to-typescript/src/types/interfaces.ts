import { Sources, DataNews } from './types';

export interface IData {
  status: string;
  totalResults: number;
  articles: Array<Sources>;
}

export interface IDataSources {
  status: string;
  sources: Array<DataNews>;
}

export interface IOptions {
  apiKey?: string;
}

export interface IResponsive {
  body: ReadableStream<Uint8Array> | null;
  bodyUsed: boolean;
  headers: Headers;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
}

export interface ICallBack<T extends IData | IDataSources> {
  (data?: T): T | void;
}
