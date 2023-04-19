import { BinaryTree } from "../service/BinaryTree";
import { Node } from "../service/Node";

export class BinaryTreeParser {
  private binaryTree = new BinaryTree();

  public maxDepth(treeJson: string): string {
    let tree: Node<number> = JSON.parse(treeJson);
    return String(this.binaryTree.maxDepth(tree));
  }

  public calculateNumberOfLeaves(treeJson: string): string {
    let tree: Node<number> = JSON.parse(treeJson);
    return String(this.binaryTree.calculateNumberOfLeaves(tree));
  }
}
