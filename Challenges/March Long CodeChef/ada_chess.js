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




class MoveStorage{
    total = 0;
    constructor(coor1,coor2){
        this.possible = [];
        this.coor1 = coor1;
        this.coor2 =coor2;
        this.total = 0;
        this.answer = [];
    }
    possibleMoves(coor1,coor2,obj){
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
        this.possible.sort((a,b)=>a.visited - !b.visited);
    }
    makeMoves(coor1,coor2,myNew){
        let fix = myNew;
        myNew = new MoveStorage(coor1, coor2);
        myNew.possibleMoves(coor1,coor2,myNew);
        let toIndex = myNew.possible.findIndex(ele => ele.visited==false);
        let coorVisitX = myNew.coor1;
        let coorVisitY = myNew.coor2;
        if (possible.hasOwnProperty(`${coorVisitX} ${coorVisitY}`)) {
            possible[`${coorVisitX} ${coorVisitY}`] = true;
        }
        fix.total++;
        fix.answer.push([coorVisitX, coorVisitY]);
        if(toIndex<0){
            return;
        }
        else{
            let x = myNew.possible[toIndex].node[0];
            let y = myNew.possible[toIndex].node[1];
            let coorVisitX = myNew.coor1;
            let coorVisitY = myNew.coor2;
            if (possible.hasOwnProperty(`${coorVisitX} ${coorVisitY}`)) {
                possible[`${coorVisitX} ${coorVisitY}`] = true;
            }
            this.makeMoves(x, y, this);
        }
    }
}

function move(point){
    let coor = point.split(' ').map(ele => parseInt(ele));
    let my = new MoveStorage(coor[0], coor[1]);
    my.makeMoves(coor[0], coor[1],my);
    my.answer.shift();
    console.log(my.answer.length);
    for(let i of my.answer){
        console.log(...i);
    }
}
// let me = ['5','3'];
// console.log(String(me[0] +' ' +  String(me[1])));
move("1 1");

