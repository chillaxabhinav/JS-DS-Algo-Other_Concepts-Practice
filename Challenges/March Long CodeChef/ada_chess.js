let possible = {
    "1 1" : false,
    "1 3" : false,
    "1 5" : false,
    "1 7" : false,
    "2 2" : false,
    "2 4" : false,
    "2 6" : false,
    "2 8" : false,
    "3 1" : false,
    "3 3" : false,
    "3 5" : false,
    "3 7" : false,
    "4 2" : false,
    "4 4" : false,
    "4 6" : false,
    "4 8" : false,
    "5 1" : false,
    "5 3" : false,
    "5 5" : false,
    "5 7" : false,
    "6 2" : false,
    "6 4" : false,
    "6 6" : false,
    "6 8" : false,
    "7 1" : false,
    "7 3" : false,
    "7 5" : false,
    "7 7" : false,
    "8 2" : false,
    "8 4" : false,
    "8 6" : false,
    "8 8" : false,
}



let myAnswer = {};


class moveStorage{
    constructor(coor1,coor2){
        this.possible = [];
        this.answer = [];
        this.coor1 = coor1;
        this.coor2 =coor2;
    }
    possibleMoves(){
        let add = this.coor1 + this.coor2;
        let sub = this.coor1 - this.coor2;
        for(let i=1;i<=8;i++){
            if(i!=this.coor1 && (add-i)>0){
                this.possible.push({ node: [i,add-i], distance: Math.abs(this.coor1 - i),visited : possible[`${i} ${add-i}`] })
            }
            if(i!=this.coor1 && (i-sub)>0){
                this.possible.push({node : [i,i-sub],distance : Math.abs(this.coor1-i), visited : possible[`${i} ${i-sub}`]});
            }
        }
        this.possible.sort((a,b)=>b.distance - a.distance);
    }
    makeMoves(){
        let toIndex = this.possible.findIndex(ele => ele.visited==false);
        let x = this.possible[toIndex].node[0];
        let y = this.possible[toIndex].node[1];
        let coorVisitX = this.coor1;
        let coorVisitY = this.coor2;
        for(let i=0;i<this.possible[toIndex].distance;i++){
            if(this.coor1 > x && this.coor2 < y){
                coorVisitX--;
                coorVisitY++;
            }
            else if(this.coor1 > x && this.coor2 > y){
                coorVisitX++;
                coorVisitY++;
            }
            else if(this.coor1 < x && this.coor2 < y){
                coorVisitX--;
                coorVisitY--;
            }
            else if(this.coor1 < x && this.coor2 > y){
                coorVisitX++;
                coorVisitY--;
            }
            possible[`${coorVisitX} ${coorVisitY}`] = true;
            let myPathNode = this.possible.find(ele => ele.node[0]==coorVisitX && ele.node[1]==coorVisitY);
            myPathNode.visited = true;
        }
    }
}

function move(point){
    if(possible.point){
        return;
    }
    let coor = (point.split(' ')).map(ele => parseInt(ele));
    let storage = new moveStorage(coor[0],coor[1]);
    storage.possibleMoves();
    storage.makeMoves();
    console.log(possible);
    console.log(storage);
}

move("5 3");

