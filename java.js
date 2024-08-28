class PriorityQueue {
    constructor() {
      this.elements = [];
    }
  
    enqueue(priority, value) {
      this.elements.push({ priority, value });
      this.elements.sort((a, b) => a.priority - b.priority);
    }
  
    dequeue() {
      return this.elements.shift().value;
    }
  
    isEmpty() {
      return this.elements.length === 0;
    }
  }
  
  function dijkstra(graph, start) {
    const distances = {};
    const priorityQueue = new PriorityQueue();
    const previous = {};
  
    // Initialize distances and previous nodes
    for (let node in graph) {
      distances[node] = Infinity;
      previous[node] = null;
    }
    distances[start] = 0;
  
    // Enqueue the start node with a distance of 0
    priorityQueue.enqueue(0, start);
  
    while (!priorityQueue.isEmpty()) {
      const currentNode = priorityQueue.dequeue();
  
      for (let neighbor in graph[currentNode]) {
        const distance = graph[currentNode][neighbor];
        const totalDistance = distances[currentNode] + distance;
  
        if (totalDistance < distances[neighbor]) {
          distances[neighbor] = totalDistance;
          previous[neighbor] = currentNode;
          priorityQueue.enqueue(totalDistance, neighbor);
        }
      }
    }
  
    return { distances, previous };
  }
  
  // Example graph
  const graph = {
    A: { B: 4, C: 2 },
    B: { C: 1, D: 5 },
    C: { D: 8, E: 10 },
    D: { E: 2, F: 6 },
    E: { F: 3 },
    F: {}
  };
  
  const result = dijkstra(graph, 'A');
  console.log(result.distances);
  console.log(result.previous);
  