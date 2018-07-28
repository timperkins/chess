export default function objectToArray(obj) {
  if (!obj) { return []; }
  return Object.keys(obj).map(id => {
    return Object.assign({id}, obj[id]);
  });
}
