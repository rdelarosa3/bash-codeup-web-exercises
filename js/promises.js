const lastCommit = (username)=>{
    return fetch('https://api.github.com/users/' + username + '/events',
        {'Authorization': GITACCESSTOKEN})
        .then((response) =>{
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        }).then((data)=> {
            for(let event of data){
                if(event.type === "PushEvent")return event.created_at ;
            }
        })
        .catch((error)=> {
            console.log(error);
        });
}
lastCommit('fmendozaro').then( date=>{
    console.log("last commit", date)
});
const wait= (sec) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, 1500);
    });
}

const request = wait(3000);
console.log(request); // pending promise
request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
request.catch(message => console.log('Promise rejected!', message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"