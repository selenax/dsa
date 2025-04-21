//traverse entire tree and return an array with all the node values in bfs order.

//NOTE: graphs are made up of vertices and edges. Vertices = nodes, edge connects the nodes

//TIME: O(V+E); SPACE: O(V)
    // v=#of vertices in the graph, e=#of edges
    // explanation: O(V) = visits every node; O(E) = each edge rep the # of child node it has. 
function breathFirstSearch(root) {
	//empty array to store node values
	const result = [];

	//keep tracks of all nodes need to be searched
	//begin search with root node
	const queue = [root];

	//run as long as queue is not empty
	while (queue.length) {
		//remove first node in queue
		const current = queue.shift();

		//make sure current node is not null (a leaf node)
		if (current === null) continue;

		//push node value to result
		result.push(current.value);

		//add child node to queue
		for (const child of current.children) {
			queue.push(child);
		}
	}
	return result;
}
[]