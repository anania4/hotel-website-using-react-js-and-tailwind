export const extractText = (node) => {
  console.log(node);
  if (node?.text) {
    return node?.text;
  }
  if (node?.children) {
    return node.children.map(extractText).join(" ");
  }
  return "";
};
