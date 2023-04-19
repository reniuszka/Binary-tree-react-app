import {Node} from "./Node";

export class BinaryTree<T> {

  public maxDepth(node?: Node<T>): number {
    if (node == null || (node.right == null && node.left == null))
      return 0;
    else {
      let lDepth = this.maxDepth(node.left);
      let rDepth = this.maxDepth(node.right);

      if (lDepth > rDepth)
        return (lDepth + 1);
      else
        return (rDepth + 1);
    }
  }

  public calculateNumberOfLeaves(node?: Node<T>): number {
    if (node == null)
      return 0;
    else if (node.left == null && node.right == null)
      return 1;
    else {
      let lNumberOfNodeWithoutChildren = this.calculateNumberOfLeaves(node.left);
      let rNumberOfNodeWithoutChildren = this.calculateNumberOfLeaves(node.right);
      return lNumberOfNodeWithoutChildren + rNumberOfNodeWithoutChildren;
    }
  }

  public compareTree(nodeFirst?: Node<T>, nodeSecond?: Node<T>): boolean {
    if (nodeFirst == null && nodeSecond == null)
      return true;
    else if (nodeFirst != null && nodeSecond != null)
      return (nodeFirst.data === nodeSecond.data && this.compareTree(nodeFirst.left, nodeSecond.left)
          && this.compareTree(nodeFirst.right, nodeSecond.right));

    return false;
  }
}