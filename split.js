const lyrics ="tomi bondhu kala pakhi. ami jeno ki. sada sada kala kala. rong jomeche sada kala.";
const parts = lyrics.split(' ');
// console.log(parts);
const sentence = lyrics.split('.');
// console.log(sentence);
const char = lyrics.split('');
// console.log(char);
const partial = lyrics.slice(5, 11);
// console.log(partial);
const partial2 = lyrics.substring(5, 11);
// console.log(partial2);

const lines = [
  "Tomi bondhu kala pakhi",
   "Ami jeno ki",
   "Sada sada kala kala",
   "Rong jomeche sada kala",
   "Hoichi ami mon pagela"
];

const newLines = lines.join(". ");
console.log(newLines);
