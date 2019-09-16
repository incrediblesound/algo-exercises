/*
 * With a graph data set we might be curious about the contents in the immediate
 * viscinity of a specific node. To do this we do a breadth first search from the
 * starting node. Write an algorithm that takes the starting node, the graph, and the
 * number of levels, and returns all the nodes starting with the starting node and
 * proceeding with all nodes one step away, two steps away and so on.
 */

const graph = {
  nodes: [],
  edges: [],
}

const getNodeByLabel = (label, graph) => {
  for (var i = 0; i < graph.nodes.length; i++) {
    if(graph.nodes[i].label === label){
      return graph.nodes[i];
    }
  }
  return null;
}

const getNodeById = (id, graph) => {
  for (var i = 0; i < graph.nodes.length; i++) {
    if(graph.nodes[i].id === id){
      return graph.nodes[i];
    }
  }
  return null;
}

let node_id = 0;

const makeNode = label => {
  return {
    id: node_id++,
    label,
  }
}

const makeEdge = (source, target) => {
  return { source, target }
}

graph.nodes.push(makeNode('bob')) //0
graph.nodes.push(makeNode('sally'))  //1
graph.nodes.push(makeNode('joe'))  //2
graph.nodes.push(makeNode('mary'))  //3

graph.edges.push(makeEdge(0, 1))
graph.edges.push(makeEdge(0, 2))
graph.edges.push(makeEdge(2, 3))


const breadthFirstSearch = (start, graph, levels) => {

}
const bob = getNodeByLabel('bob', graph)
console.log(breadthFirstSearch(bob, graph, 3))















/* answer */
// const breadthFirstSearch = (start, graph, levels, result=[]) => {
//   if(levels) {
//     result.push(start)
//     const nextLevel = graph.edges
//       .filter(edge => edge.source === start.id)
//       .map(edge => getNodeById(edge.target, graph))
//     nextLevel.forEach(node => breadthFirstSearch(node, graph, levels-1, result))
//   }
//   return result;
// }
//
// const bob = getNodeByLabel('bob', graph)
// console.log(breadthFirstSearch(bob, graph, 3))
