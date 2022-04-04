import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { urlChecker } from './js/urlChecker';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
        }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
        });
    });
}

export {
    checkForName,
    handleSubmit,
    urlChecker
}