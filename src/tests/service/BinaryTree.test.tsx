import { BinaryTree } from "../../service/BinaryTree";
import { Node } from "../../service/Node";

let binaryTree = new BinaryTree();

test("calculate max number of edges when height is 4", () => {
  //given
  let root = NodeFactory.createNodeWithValue(44);
  root.left = NodeFactory.createNodeWithValue(7);
  root.right = NodeFactory.createNodeWithValue(5);
  root.left.left = NodeFactory.createNodeWithValue(3);
  root.left.right = NodeFactory.createNodeWithValue(3);
  root.left.right.right = NodeFactory.createNodeWithValue(3);
  root.left.right.right.right = NodeFactory.createNodeWithValue(1);

  //when
  const maxDepth = binaryTree.maxDepth(root);

  //then
  expect(maxDepth).toBe(4);
});

test("calculate max number of edges when only root exists", () => {
  //given
  let root = NodeFactory.createNodeWithValue(44);

  //when
  const maxDepth = binaryTree.maxDepth(root);

  //then
  expect(maxDepth).toBe(0);
});

test("calculate max number of edges when left and right height is equals", () => {
  //given
  let root = NodeFactory.createNodeWithValue(44);
  root.left = NodeFactory.createNodeWithValue(7);
  root.right = NodeFactory.createNodeWithValue(5);

  //when
  const maxDepth = binaryTree.maxDepth(root);

  //then
  expect(maxDepth).toBe(1);
});

test("calculate max number of edges when only left exists", () => {
  //given
  let root = NodeFactory.createNodeWithValue(44);
  root.left = NodeFactory.createNodeWithValue(7);

  //when
  const maxDepth = binaryTree.maxDepth(root);

  //then
  expect(maxDepth).toBe(1);
});

test("calculate the number of leaves when only root exists", () => {
  //given
  let root = NodeFactory.createNodeWithValue(44);

  //when
  const numberOfLeaves = binaryTree.calculateNumberOfLeaves(root);

  //then
  expect(numberOfLeaves).toBe(1);
});

test("calculate the number of leaves when value is 1", () => {
  //given
  let root = NodeFactory.createNodeWithValue(44);
  root.left = NodeFactory.createNodeWithValue(7);

  //when
  const numberOfLeaves = binaryTree.calculateNumberOfLeaves(root);

  //then
  expect(numberOfLeaves).toBe(1);
});

test("calculate the number of leaves when value is 2", () => {
  //given
  let root = NodeFactory.createNodeWithValue(44);
  root.left = NodeFactory.createNodeWithValue(7);
  root.right = NodeFactory.createNodeWithValue(2);

  //when
  const numberOfLeaves = binaryTree.calculateNumberOfLeaves(root);

  //then
  expect(numberOfLeaves).toBe(2);
});

test("calculate the number of leaves when value is 4", () => {
  //given
  let root = NodeFactory.createNodeWithValue(44);
  root.left = NodeFactory.createNodeWithValue(7);
  root.right = NodeFactory.createNodeWithValue(5);
  root.left.left = NodeFactory.createNodeWithValue(3);
  root.left.right = NodeFactory.createNodeWithValue(3);
  root.left.right.right = NodeFactory.createNodeWithValue(3);
  root.left.right.right.right = NodeFactory.createNodeWithValue(1);
  root.left.right.right.left = NodeFactory.createNodeWithValue(1);

  //when
  const numberOfLeaves = binaryTree.calculateNumberOfLeaves(root);

  //then
  expect(numberOfLeaves).toBe(4);
});

test("calculate the number of leaves when value is 5", () => {
  //given
  let root = NodeFactory.createNodeWithValue(44);
  root.left = NodeFactory.createNodeWithValue(7);
  root.right = NodeFactory.createNodeWithValue(5);
  root.left.left = NodeFactory.createNodeWithValue(3);
  root.left.right = NodeFactory.createNodeWithValue(3);
  root.left.right.right = NodeFactory.createNodeWithValue(3);
  root.left.right.right.right = NodeFactory.createNodeWithValue(1);
  root.left.right.right.left = NodeFactory.createNodeWithValue(1);
  root.left.right.right.left.right = NodeFactory.createNodeWithValue(3);
  root.left.right.right.left.left = NodeFactory.createNodeWithValue(2);

  //when
  const numberOfLeaves = binaryTree.calculateNumberOfLeaves(root);

  //then
  expect(numberOfLeaves).toBe(5);
});

test("compare tree when only root exists with same values", () => {
  //given
  let rootFirst = NodeFactory.createNodeWithValue(44);
  let rootSecond = NodeFactory.createNodeWithValue(44);

  //when
  const equal = binaryTree.compareTree(rootFirst, rootSecond);

  //then
  expect(equal).toBe(true);
});

test("compare tree when only root exists with different values", () => {
  //given
  let rootFirst = NodeFactory.createNodeWithValue(44);
  let rootSecond = NodeFactory.createNodeWithValue(33);

  //when
  const equal = binaryTree.compareTree(rootFirst, rootSecond);

  //then
  expect(equal).toBe(false);
});

test("compare tree when one branch exists and tree are equal", () => {
  //given
  let rootFirst = NodeFactory.createNodeWithValue(44);
  rootFirst.right = NodeFactory.createNodeWithValue(22);

  let rootSecond = NodeFactory.createNodeWithValue(44);
  rootSecond.right = NodeFactory.createNodeWithValue(22);

  //when
  const equal = binaryTree.compareTree(rootFirst, rootSecond);

  //then
  expect(equal).toBe(true);
});

test("compare tree when one branch exists and first branch have different value", () => {
  //given
  let rootFirst = NodeFactory.createNodeWithValue(44);
  rootFirst.right = NodeFactory.createNodeWithValue(22);

  let rootSecond = NodeFactory.createNodeWithValue(44);
  rootSecond.right = NodeFactory.createNodeWithValue(11);

  //when
  const equal = binaryTree.compareTree(rootFirst, rootSecond);

  //then
  expect(equal).toBe(false);
});

test("compare tree when number of branches are varies", () => {
  //given
  let rootFirst = NodeFactory.createNodeWithValue(44);
  rootFirst.right = NodeFactory.createNodeWithValue(22);
  rootFirst.left = NodeFactory.createNodeWithValue(22);

  let rootSecond = NodeFactory.createNodeWithValue(44);
  rootSecond.right = NodeFactory.createNodeWithValue(22);

  //when
  const equal = binaryTree.compareTree(rootFirst, rootSecond);

  //then
  expect(equal).toBe(false);
});

test("compare tree when number of branches are the same", () => {
  //given
  let rootFirst = NodeFactory.createNodeWithValue(44);
  rootFirst.right = NodeFactory.createNodeWithValue(22);
  rootFirst.right.right = NodeFactory.createNodeWithValue(23);
  rootFirst.right.right.right = NodeFactory.createNodeWithValue(24);
  rootFirst.left = NodeFactory.createNodeWithValue(22);

  let rootSecond = NodeFactory.createNodeWithValue(44);
  rootSecond.right = NodeFactory.createNodeWithValue(22);
  rootSecond.right.right = NodeFactory.createNodeWithValue(23);
  rootSecond.right.right.right = NodeFactory.createNodeWithValue(24);
  rootSecond.left = NodeFactory.createNodeWithValue(22);

  //when
  const equal = binaryTree.compareTree(rootFirst, rootSecond);

  //then
  expect(equal).toBe(true);
});

test("compare tree when number of branches are the same but value is different", () => {
  //given
  let rootFirst = NodeFactory.createNodeWithValue(44);
  rootFirst.right = NodeFactory.createNodeWithValue(22);
  rootFirst.right.right = NodeFactory.createNodeWithValue(23);
  rootFirst.right.right.right = NodeFactory.createNodeWithValue(24);
  rootFirst.left = NodeFactory.createNodeWithValue(22);

  let rootSecond = NodeFactory.createNodeWithValue(44);
  rootSecond.right = NodeFactory.createNodeWithValue(22);
  rootSecond.right.right = NodeFactory.createNodeWithValue(23);
  rootSecond.right.right.right = NodeFactory.createNodeWithValue(24);
  rootSecond.left = NodeFactory.createNodeWithValue(11);

  //when
  const equal = binaryTree.compareTree(rootFirst, rootSecond);

  //then
  expect(equal).toBe(false);
});

class NodeFactory {
  public static createNodeWithValue(val: Number) {
    return new Node<Number>(val);
  }
}
