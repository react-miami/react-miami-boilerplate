// Toggle className.
export default function(element, className) {
  if (!element || !className) {
    return;
  }

  let classString = element.className;
  let nameIndex = classString.indexOf(className);

  if (nameIndex === -1) {
    classString += ' ' + className;
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
  }
  element.className = classString.trim();
}
