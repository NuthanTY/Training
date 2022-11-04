/// <reference lib="webworker" />

import { Morework } from './morework';



addEventListener('message', ({ data }) => {
   // const response = `worker response to ${data}`;
   const response = Morework.findNthPrimeNumber(parseInt(data));
   postMessage(response);
});