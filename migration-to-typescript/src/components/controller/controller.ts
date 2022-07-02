import AppLoader from './appLoader';
import { IData, IDataSources, ICallBack } from '../../types/interfaces';

class AppController extends AppLoader {
  getSources(callback?: ICallBack<IDataSources>) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: MouseEvent, callback?: ICallBack<IData>) {
    let target = e.target;
    const newsContainer = e.currentTarget;

    while (target !== newsContainer) {
      if ((target as HTMLSpanElement).classList.contains('source__item')) {
        const sourceId: string = (target as HTMLSpanElement).getAttribute('data-source-id') as string;
        if ((newsContainer as HTMLDivElement).getAttribute('data-source') !== sourceId) {
          (newsContainer as HTMLDivElement).setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = (target as HTMLSpanElement).parentNode;
    }
  }
}

export default AppController;
