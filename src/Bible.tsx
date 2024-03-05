import { useState } from 'react';


const BibleVerse = () => {
const [verse, setVerse] = useState('');


const generateVerse = () => {

  fetch(`https://www.abibliadigital.com.br/api/verses/nvi/random`)
    .then(response => response.json()) 
    .then(data => setVerse(`${data.book.name} ${data.chapter}:${data.number}: ${data.text}`));
};

return (
  <div>
    <h1>Bible Verse Generator</h1>
    <button onClick={generateVerse}>Generate Verse</button>
    <p>{verse}</p>
  </div>
);
};


export default BibleVerse;