import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '50cc04cc811648eda863e5dcfd656fc2', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
