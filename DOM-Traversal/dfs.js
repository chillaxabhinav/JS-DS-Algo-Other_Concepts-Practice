const rootElement = document.getRootNode();

function dfs(element){
    const childElements = element.children;
    for(let i = 0 ; i < childElements.length; i++){
        let child = childElements[i];
        console.log("Child  ",child);
        dfs(child);
    }
}