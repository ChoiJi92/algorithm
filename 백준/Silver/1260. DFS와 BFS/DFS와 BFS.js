const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);

let graph = [...Array(N + 1)].map((e) => []);

for (let i = 0; i < M; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

let visited = new Array(input.length).fill(false);

let dfsArray = [];

const dfs = (graph, start, visited) => {
  visited[start] = true;
  dfsArray.push(start);

  for (let node of graph[start]) {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  }
};

const bfs = (graph, start) => {
  let visited = [];
  let needVisit = [];

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};
dfs(graph, V, visited);
console.log(dfsArray.join(" "));
console.log(bfs(graph, V).join(" "));
