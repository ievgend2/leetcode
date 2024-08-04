// let points = [[8, 7], [9, 9], [7, 4], [9, 7]];
// let points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
let points = [[58,71],[64,41],[96,14],[26,37],[11,67],[84,2],[72,0],[16,95],[74,100],[60,98],[8,45],[6,59],[69,32],[93,12],[26,56],[9,39],[61,84],[54,93],[43,47],[84,40],[95,82],[17,85],[99,41],[96,24],[83,10],[82,62],[26,81],[74,96],[53,0],[11,72],[51,35],[33,3],[33,52],[58,94],[89,92],[54,85]]

let twoPoints = function (points) {
    // arr = [];
    // arr2 = [];
    // points.sort((a, b) => a[0] - b[0])
    // points.map(a => arr.push(a[0]))
    // arr.sort((a, b) => arr2.push(a - b))
    // arr2.sort((a, b) => a - b)
    // return arr2[arr2.length - 1]
    // ####################################
    // arr = [];
    // arr2 = [];
    // points.sort((a, b) => a[0] - b[0])
    // points.sort((a, b) => arr2.push(a[0] - b[0]))
    // return Math.max(...arr2)
    // ####################################
    arr2 = [];
    points.sort((a, b) => a[0] - b[0])
    points.sort((a, b) => arr2.push(a[0] - b[0]))
    return Math.max(...arr2)
};

console.log(twoPoints(points));
