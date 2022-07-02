import { IOptions, IDataSources } from '../../types/interfaces';

class Loader {
  baseLink: string;
  options: IOptions;
  constructor(baseLink: string, options: IOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: IOptions | Partial<object> },
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler<T extends Response>(res: T): T {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  makeUrl(options: { apiKey?: string }, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;
    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions] as string}&`;
    });
    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: (data: IDataSources) => void, options: IOptions) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((...args) => this.errorHandler(...args))
      .then((res) => res.json())
      .then((data: IDataSources) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
