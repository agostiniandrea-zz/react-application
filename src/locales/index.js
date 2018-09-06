
import counterpart from 'counterpart';
/* import en from './en.json';

counterpart.registerTranslations(en.code, en);

counterpart.setLocale(en.code); */

export default function setUpTranslation(lang) {
    let langName = lang,
        json = require(`./${langName}.json`);
    counterpart.setLocale(langName);
    counterpart.registerTranslations(langName, json);
}

/* export default [
    {
        active: true,
        available: true,
        code: en.code,
        icon: '',
        name: 'languages.en.name'
    }
]; */