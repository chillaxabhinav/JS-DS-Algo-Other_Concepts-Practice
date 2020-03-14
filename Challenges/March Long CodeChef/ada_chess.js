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

let answer = [];
let total = 0;


class moveStorage{
    constructor(coor1,coor2){
        this.possible = [];
        this.coor1 = coor1;
        this.coor2 =coor2;
    }
    static possibleMoves(coor1,coor2,obj){
        let helper1 = coor1;
        let helper2 = coor2;
        if(helper1>=1 && helper2>=1){
            while(helper1>=1 && helper2>=1){
                if(helper1!=coor1 && helper2!=coor2){
                    obj.possible.push({ node: [helper1, helper2], distance: Math.abs(obj.coor1 - helper1), visited: possible[`${helper1} ${helper2}`] });
                }
                helper1--;
                helper2--;
            }
        }
        helper1 = coor1;
        helper2 = coor2;
        if(helper1>=1 && helper2<=8){
            while (helper1 >= 1 && helper2 <= 8){
                if (helper1 != coor1 && helper2 != coor2) {
                    obj.possible.push({ node: [helper1, helper2], distance: Math.abs(obj.coor1 - helper1), visited: possible[`${helper1} ${helper2}`] });
                }
                helper1--;
                helper2++;
            }
        }
        helper1 = coor1;
        helper2 = coor2;
        if (helper1 <= 8 && helper2 <= 8) {
            while (helper1 <= 8 && helper2 <= 8) {
                if (helper1 != coor1 && helper2 != coor2) {
                    obj.possible.push({ node: [helper1, helper2], distance: Math.abs(obj.coor1 - helper1), visited: possible[`${helper1} ${helper2}`] });
                }
                helper1++;
                helper2++;
            }
        }
        helper1 = coor1;
        helper2 = coor2;
        if (helper1 <= 8 && helper2 >= 1) {
            while (helper1 <= 8 && helper2 >= 1) {
                if (helper1 != coor1 && helper2 != coor2) {
                    obj.possible.push({ node: [helper1, helper2], distance: Math.abs(obj.coor1 - helper1), visited: possible[`${helper1} ${helper2}`] });
                }
                helper1++;
                helper2--;
            }
        }
        obj.possible.sort((a,b)=>a.distance - b.distance);
        //console.log(obj.possible);
    }
    static makeMoves(coor1,coor2,myNew){
        myNew = new moveStorage(coor1, coor2);
        moveStorage.possibleMoves(coor1,coor2,myNew);
        let toIndex = myNew.possible.findIndex(ele => ele.visited==false);
        if(toIndex<0){
            return;
        }
        else{
            let x = myNew.possible[toIndex].node[0];
            let y = myNew.possible[toIndex].node[1];
            let coorVisitX = myNew.coor1;
            let coorVisitY = myNew.coor2;
            //console.log('Current ',coorVisitX,coorVisitY,' to visit ',x,y);
            for (let i = 0; i < myNew.possible[toIndex].distance; i++) {
                if (possible.hasOwnProperty(`${coorVisitX} ${coorVisitY}`)) {
                    possible[`${coorVisitX} ${coorVisitY}`] = true;
                }
                answer.push([coorVisitX, coorVisitY]);
                if (x < coorVisitX && y < coorVisitY) {
                    coorVisitX--;
                    coorVisitY--;
                    total++;
                }
                else if (x > coorVisitX && y > coorVisitY) {
                    coorVisitX++;
                    coorVisitY++;
                    total++;
                }
                else if (x < coorVisitX && y > coorVisitY) {
                    coorVisitX--;
                    coorVisitY++;
                    total++;
                }
                else if (x > coorVisitX && y < coorVisitY) {
                    coorVisitX++;
                    coorVisitY--;
                    total++;
                }
            }
            moveStorage.makeMoves(x, y, myNew);
        }
    }
}

function move(point){
    let coor = (point.split(' ')).map(ele => parseInt(ele));
    moveStorage.makeMoves(coor[0],coor[1]);
}
console.log(possible);
console.log(answer);


move("5 3");

