const rootElement = document.getRootNode();

const myQueue = [];

function bfs(element){
    const childElements = element.children;
    for(let i = 0 ; i < childElements.length; i++){
        myQueue.push(childElements[i]);
    }
    if(myQueue.length > 0){
        let element = myQueue.shift();
        console.log(element);
        bfs(element);
    }
    else{
        return;
    }
}