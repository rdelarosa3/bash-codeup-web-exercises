const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeOrMoreLang = users.filter((user)=> user.languages.length >= 3);
const emails = users.map((user)=> user.email );
const combinedExperience = users.reduce((totalYears,user)=>{
    return totalYears + user.yearsOfExperience;
},0)
const averageExperience = combinedExperience / users.length;
const longestEmail = users
    .map((user)=> user.email )
    .reduce((a,b)=> a.length > b.length ? a : b );

const sentence = "Your instructors are: ryan, luis, zach, fernando, justin.";

const listOfInstructors = (sentence) => {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const listOfInstructors = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, []); // start with an empty object
    return wordCountObject;
}

let langus = users
    .map((user)=> user.languages.join(","))
    .join(",")
    .split(",");

langus.reduce((a,b)=>{
    if(a!=b) console.log(b);
},"")
const uniqueLanguages = users.reduce((langArr, user)=>{
      for( let lang of user.languages){
          // langArr.push(lang);
      }
    // console.log(langArr);
},[])
// console.log(uniqueLanguages)
// console.log(threeOrMoreLang);
// console.log(emails);
// console.log(combinedExperience);
// console.log(averageExperience);
// console.log(longestEmail);