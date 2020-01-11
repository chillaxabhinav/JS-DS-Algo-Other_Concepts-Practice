
function setLocal(obj){
    // it takes key value pair and value is always a string not object
    // JSON.stringify(object) helps to convert object into json string
    stringobj = JSON.stringify(obj);
    console.log(stringobj);
    localStorage.setItem('user',stringobj);
}

function getLocal(){
    const me = window.localStorage.getItem('user');
    console.log(me);
    const myobj = JSON.parse(me);
    console.log(myobj);
}

const myobj = {
    1 : 'Abhinav',
    lastname : 'Singh'
}
console.log(String(myobj));
setLocal(myobj);
getLocal();

