import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '4cbbb9c70a7a43a49660ef9ffa70fa5c', // 50cc04cc811648eda863e5dcfd656fc2 резервный ключ 4cbbb9c70a7a43a49660ef9ffa70fa5c
    });
  }
}

export default AppLoader;
