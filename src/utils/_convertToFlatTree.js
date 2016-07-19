// Create Folder Matrix.
export default function walk(arr = [], obj) {
  if (obj.length) {
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].children) {
        arr.push(obj[i]);
        // console.log('HAS CHILDREN: ' + obj[i].name, obj[i]);
        walk(arr, obj[i].children);
      } else {
        arr.push(obj[i]);
        // console.log('NO CHILDREN: noChildrenArray', obj[i]);
      }
    }
  }
  // console.log('MATRIX FOLDER: ', arr);
  return arr;
}
