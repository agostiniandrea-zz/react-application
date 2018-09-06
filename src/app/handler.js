import store from './Redux/store';
/* import Api from 'Api'; */
/* import TranslateConfig from '../locales/index'; */
import { endLoading, startLoading } from 'Modules/loading';


export default (/* location */) => new Promise((resolve, reject) => {
    /* TranslateConfig(LANG); */
    initApp()
        .then(() => {
            document.title = 'React Application';
            store.dispatch(endLoading());
            resolve();
        })
        .catch((err) => {
            reject(err);
        });
});

function initApp() {
    return new Promise((resolve/* , reject */) => {
        document.title = 'Loading...';
        //store.dispatch(paramsInitData(window.location));
        store.dispatch(startLoading());
        resolve();
        /* store.dispatch(sectionsInitData(store.getState().appConfig.defaultPages));
        Api.getRegistry(USER_ID)
            .then((resp) => {
                document.title = resp.user.description;
                resolve();
            /* })
            .catch((error) => reject(error)); */
    });
}