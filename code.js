function convertToAdjMatrix(adjList) {
    var v = adjList.length
    var adjMat = Array.from(Array(v), ()=>Array(v).fill(0)) // from here: https://www.geeksforgeeks.org/convert-adjacency-list-to-adjacency-matrix-representation-of-a-graph/

    for(var k = 0; k < v; k++){
        for (var j of adjList[k]){
            adjMat[k][j] = 1
        }
    }
    return adjMat;
}

console.log(convertToAdjMatrix([[ 1, 4 ], [ 0, 2, 3, 4 ], [ 1, 3 ], [ 1, 2, 4 ], [ 0, 1, 3 ]])) // debugging

function convertToAdjList(adjMat) {
    var v = adjMat.length
    var adjList = []

    for(var i = 0; i < v; i++){
        var vList = []
        for(var j = 0; j < v; j++){
            if(adjMat[i][j] > 0){
                vList.push(j)
            }
        }
        adjList[i] = vList
        //console.log(vList)
    }
    
    return adjList;
}

console.log(convertToAdjList([[ 0, 1, 0, 0, 1 ], [ 1, 0, 1, 1, 1 ], [ 0, 1, 0, 1, 0 ], [ 0, 1, 1, 0, 1 ], [ 1, 1, 0, 1, 0 ]])) // debugging