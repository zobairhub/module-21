const lyrics = 'tomi bondu kala PAKI, ami jeno ki bosonto kale tomai bolte parini, sada sada kala kala, rong jomese sada kala';
const lyricsLower = lyrics.toLowerCase();
const searchWord =  'PakI';
const searchWordLower = searchWord.toLowerCase();
const doesExists = lyricsLower.includes(searchWordLower);

console.log(doesExists);
// doesExistsOneLine = lyrics.toLowerCase().includes(searchWord.toLowerCase());
// console.log(doesExistsOneLine);
// --------------------------------
// indexOf
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('tomi'));

if (lyrics.indexOf('sada') !== -1) {
  console.log('string exists');
}
else 
{
  console.log('string does not exists');
}


//startsWith
console.log(lyrics.startsWith('tomi') );

//endswith
const fileName = 'bio.pdf';
const oterFile = 'pic.png';
// const checkExtension = fileName.endsWith('.pdf');
const checkExtension = oterFile.endsWith('.png');
console.log(checkExtension);


const nayoks = ["Bangla Bhai", "English Bhai", "Korean Bhai","Turkish Bhai"];

for (let nayok of nayoks) {
  console.log(nayok);
}
// what will be the final value of the sum ?
let sum=0; 
for( let i = 0; i<=3;i++){ 
console.log(sum = sum + i);

}