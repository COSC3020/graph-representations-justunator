[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11754439&assignment_repo_type=AssignmentRepo)
# Graph Representations

Implement a function that converts an adjacency list to an adjacency matrix for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complxeity should depend on both edges and vertices as it should scale with V to create a V by V matrix, so $\Theta(V^2)$. The actual conversion from list to matrix and swapping the 0s with 1s, it should be $\Theta(V + E)$ time as for each vertex, it checks the same vertex within the list and swaps the edges that already exist. It does not actually check every possible possible in the matrix so it can not be $V^2$.

## Bonus

Implement a function to convert an adjacency matrix to an adjacency list and
analyze it as above.

Converting from matrix to list should take $\Theta(V^2)$ time as it needs to read through every position of the matrix to see if it is actually an edge that exists before it can put the edge into the adjacent List.