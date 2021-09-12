import getData from './lib/service.js';

getData(1)
.then(response => console.log(response))
.catch(err => console.warn(new Error(err)));