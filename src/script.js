const data = [
  {
    "nodeId": "4",
    "name": "Four",
    "parentId": "2",
    "previousSiblingId": "6"
  },
  {
    "nodeId": "8",
    "name": "Eight",
    "parentId": "7",
    "previousSiblingId": null
  },
  {
    "nodeId": "2",
    "name": "Two",
    "parentId": "1",
    "previousSiblingId": null
  },
  {
    "nodeId": "6",
    "name": "Six",
    "parentId": "2",
    "previousSiblingId": null
  },
  {
    "nodeId": "3",
    "name": "Three",
    "parentId": null,
    "previousSiblingId": null
  },
  {
    "nodeId": "5",
    "name": "Five",
    "parentId": "4",
    "previousSiblingId": null
  },
  {
    "nodeId": "7",
    "name": "Seven",
    "parentId": null,
    "previousSiblingId": "1"
  },
  {
    "nodeId": "1",
    "name": "One",
    "parentId": null,
    "previousSiblingId": "3"
  }
];

// Ideal way to import json
// import data from '../input/nodes.json' assert { type: 'JSON' };

function transformToTree(arrObj) {
  const ids = arrObj.map(node => node.nodeId);
  const transformed = arrObj.map(parent => {
    const children = arrObj.filter(child => {
      if(
        child.nodeId !== child.parentId &&
        child.parentId === parent.nodeId
      ) {
        return true;
      }

      return false
    });

    if(children.length || children.length === 0) {
      parent.children = children || []
    }

    return parent;
  }).filter(obj => {

    if(obj.nodeId === obj.parentId || !ids.includes(obj.parentId)) {
      return true
    }

    return false;
  });

  return transformed;
}

const result  = transformToTree(data);

console.log(result);
