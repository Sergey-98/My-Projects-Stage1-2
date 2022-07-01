import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IData, IDataSources } from '../../types/interfaces';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document
            .querySelector('.sources') as HTMLDivElement)
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => { 
                if (data) {
                    this.view.drawNews(data)
                }
            }));
        this.controller.getSources((data) => {
            if (data) {
                this.view.drawSources(data);
            }
            
        });
    }
}

export default App;
