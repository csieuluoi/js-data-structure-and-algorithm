class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    // add vertex 
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];       
        }
    }

   // add edges, take in 2 vertex
   // undirected graph
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);

    }
    // remove an edge 
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=>v!==vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=>v!==vertex1);
    }

    // remove a vertex 
    removeVertex(vertex){
        var vList = this.adjacencyList[vertex];
        for (let i = 0; i < vList.length; i++){
//             this.adjacencyList[vList[i]] = this.adjacencyList[vList[i]].filter(v=>v!==vertex);
            this.removeEdge(vertex, vList[i]);
        }
        delete this.adjacencyList[vertex];
    }

    // Depth First search
    DFS_recusion(startVertex){
        
        const resultList = [];
        const visited = {}
        const adjacencyList = this.adjacencyList;
        (function recusiveHelper(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            resultList.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                console.log(neighbor);
                if(!visited[neighbor]){
                    return recusiveHelper(neighbor);
                }
            });

//             for (let i = 0; i< adjacencyList[vertex].length; i++){
//                 const neighbor = adjacencyList[vertex][i];
//                 console.log(neighbor);
//                 if (!visited[neighbor]){
//                     return recusiveDFS(neighbor);
//                 }
//             }

        }) (startVertex);
        return resultList;
    }

    // iterative Depth first search
    DFS_iterative(startVertex){
        const resultList = [];
        const vt_stack = [startVertex];
        const visited = {};
        let currentVertex;
        visited[startVertex] = true;
        while(vt_stack.length){
            currentVertex = vt_stack.pop();
            resultList.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    vt_stack.push(neighbor);
                }
            });
        }
        return resultList;
    }

    // Breadth first search
    BFS_iterative(startVertex){
        const resultList = [];
        const vt_queue = [startVertex];
        const visited = {};
        let currentVertex;
        visited[startVertex] = true;
        while(vt_queue.length){
            currentVertex = vt_queue.shift();
            resultList.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
               if (!visited[neighbor]){
                   visited[neighbor] = true;
                   vt_queue.push(neighbor);
               } 
            });
        }
        return resultList;
    }
}


var graph = new Graph();
g = ["A", "B", "C", "D", "E", "F"];
for (let i = 0; i<g.length; i++){
    graph.addVertex(g[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
