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
    .reduce((longest,user)=> longest.length > user.email.length ? longest : user.email, '' );

const instructorsSentence = users
    .reduce((sentence, user,index)=>{
        return sentence += (index === users.length - 1) ? `${user.name}.` : `${user.name},`
    },"Your instructors are: ");

const uniqueLanguages = users
    .reduce((langs ,user)=>{
        return langs.concat(user.languages)
    },[]).reduce((uniqueLangs,lang)=>{
        uniqueLangs.includes(lang) ? uniqueLangs : uniqueLangs.push(lang);
        return uniqueLangs;
    },[]);


console.log(1,threeOrMoreLang);
console.log(2,emails);
console.log(3,combinedExperience);
console.log(4,averageExperience);
console.log(5,longestEmail);
console.log(6,instructorsSentence);
console.log(7,uniqueLanguages);