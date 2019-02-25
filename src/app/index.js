import './misc/common.scss';
import './answer/answer.scss';
import { initEnv } from './misc/console';
import { AppAnswer } from './answer/answer';

document.addEventListener('readystatechange', () => {
    if (document.readyState == 'complete') {
        initEnv();
        window.app = new AppAnswer();
    }
});