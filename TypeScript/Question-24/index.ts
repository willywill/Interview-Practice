import Queue from '../Question-23'

type Edge = [source: string, destination: string];

interface AdjacencyList {
  [node: string]: Array<string>,
};

// NOTE: This graph class expects a list of edges and uses an adjacency list internally.
// Might be worth exploring what an adjacency matrix would look like.
class Graph {
  private readonly adjacencyList: Record<string, Array<string>> = {};
  
  constructor(public edges : Array<Edge>) {
    this.adjacencyList = this.buildGraphFromEdges(edges);
  }

  private buildGraphFromEdges(edges: Array<Edge>): AdjacencyList {
    const adjacencyList: AdjacencyList = {};

    edges.forEach(edge => {
      const [source, destination] = edge;

      // Check if the node exists in the adjacency list
      // If it doesn't, we declare this node as having no neighbors
      if (!(source in adjacencyList)) adjacencyList[source] = [];
      if (!(destination in adjacencyList)) adjacencyList[destination] = [];

      // Push all of the neighbors on this edge into the adjacency list
      adjacencyList[source].push(destination);
      adjacencyList[destination].push(source);
    });

    return adjacencyList;
  }

  public shortestPath(start: string, end: string): number {
    // If the start and end nodes are the same, return 0
    if (start === end) return 0;

    // If the start or end nodes do not exist in the adjacency list, return -1
    if (!(start in this.adjacencyList) || !(end in this.adjacencyList)) return -1;

    // Initialize the queue and visited node set with the start position
    const queue = new Queue<[string, number]>();
    const visitedNodes = new Set<string>([start]);

    // Add the start node to the queue with a distance of 0
    queue.enqueue([start, 0]);

    // While there are still nodes in the queue
    while (queue.length > 0) {
      // Remove the first node off the queue from the front
      const [currentNode, distance] = queue.dequeue();

      // Did we find the end node?
      if (currentNode === end) return distance;

      // For each of the neighbors of the current node
      this.adjacencyList[currentNode].forEach(neighbor => {
        // Add the neighbor to the queue if it hasn't been visited
        if (!visitedNodes.has(neighbor)) {
          visitedNodes.add(neighbor);
          // Enqueue the neighbor with the next distance
          queue.enqueue([neighbor, distance + 1]);
        }
      });
    }

    return -1;
  }
}

const edges: Array<Edge> = [
  ['W', 'X'],
  ['X', 'Y'],
  ['Z', 'Y'],
  ['Z', 'V'],
  ['W', 'V'],
];

const graph = new Graph(edges);
graph.shortestPath('W', 'Z'); // 2

export default Graph;

