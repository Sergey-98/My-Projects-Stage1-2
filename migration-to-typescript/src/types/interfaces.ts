export interface ISources {
  source: {
    name: string;
    id: string;
  };
  author: string;
  title: string;
  description: string,
  url: string,
  urlToImage: string;
  publishedAt: string,
  content: string,
}

export interface IData {
  status: string;
  totalResults: number;
  articles: Array<ISources>;
}

export interface IDataNews {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface IDataSources {
  status: string;
  sources: Array<IDataNews>;
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

export interface ICallBack <T extends IData | IDataSources> {
  (data ?: T) : T | void;
}
