import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback : () => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e : PointerEvent, callback : () => void) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if ((target as HTMLSpanElement).classList.contains('source__item')) {
                const sourceId : string = (target as HTMLSpanElement).getAttribute('data-source-id') as string;
                if ((newsContainer as HTMLDivElement).getAttribute('data-source') !== sourceId) {
                    (newsContainer as HTMLDivElement).setAttribute('data-source', sourceId as string);
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
