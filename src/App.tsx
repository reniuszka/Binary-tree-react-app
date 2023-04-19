import React from "react";
import { useState } from "react";
import { BinaryTreeParser } from "./component/BinaryTreeParser";

import { BinarySearchTreeNode, drawBinaryTree } from "binary-tree-visualizer";
import { Node } from "./service/Node";

let binaryTree: BinaryTreeParser = new BinaryTreeParser();

export default function App() {
  const [jsonTree, setJsonMessage] = useState("");
  const [maxDepth, setMaxDepth] = useState(jsonTree);
  const [numberOfLeaves, setNumberOfLeaves] = useState(jsonTree);

  function renderBinaryTree() {
    drawBinaryTree(
      convertJsonToBinaryTree(),
      document.querySelector("canvas") as HTMLCanvasElement
    );
  }

  function convertJsonToBinaryTree(): BinarySearchTreeNode<number> {
    let providedTree: Node<number> = JSON.parse(jsonTree);
    // @ts-ignore
    return convertBinaryTree(providedTree);
  }

  function convertBinaryTree(
    providedTree?: Node<number>
  ): BinarySearchTreeNode<number> | undefined {
    if (providedTree == null) return undefined;

    let r = new BinarySearchTreeNode<number>(providedTree.data);

    r.left = convertBinaryTree(providedTree.left);
    r.right = convertBinaryTree(providedTree.right);

    return r;
  }

  function handleBinaryTreeValueChange(event: any) {
    setJsonMessage(event.target.value);
  }

  function checkMaxDepth() {
    setMaxDepth(binaryTree.maxDepth(jsonTree));
  }

  function calculateNumberOfLeaves() {
    setNumberOfLeaves(binaryTree.calculateNumberOfLeaves(jsonTree));
  }

  return (
    <main className="container">
      <label htmlFor="binaryJsonTree">Input Binary Json Tree</label>
      <div className="form">
        <textarea
          id="binaryJsonTree"
          rows={25}
          cols={50}
          name="jsonTree"
          value={jsonTree}
          placeholder="paste json data here (example in README.md)"
          onChange={handleBinaryTreeValueChange}
        />
      </div>

      <div>
        <h2>
          Max Depth: <span>{maxDepth}</span>
        </h2>
        <h2>
          Number Of Leaves: <span>{numberOfLeaves}</span>
        </h2>
      </div>

      <div className="defails-container">
        <label htmlFor="binaryJsonTree">Checks:</label>
        <div className="buttons">
          <button disabled={!jsonTree} onClick={checkMaxDepth}>
            Check Max Depth
          </button>
          <button disabled={!jsonTree} onClick={calculateNumberOfLeaves}>
            Calculate Number Of Leafs
          </button>
          <button disabled={!jsonTree} onClick={renderBinaryTree}>
            Draw Binary Tree
          </button>
        </div>
        <div className="canvas-box">
          <canvas></canvas>
        </div>
      </div>
    </main>
  );
}
