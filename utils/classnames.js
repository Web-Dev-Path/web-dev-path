export function combineClasses(baseClass, customClassName, styles) {
  return customClassName && styles[customClassName]
    ? `${baseClass} ${styles[customClassName]}`
    : baseClass;
}
