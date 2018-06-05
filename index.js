export function otherDep() {
  console.log('This is the other dependency')
}

export function excludedDepFunction() {
  console.log('This dep should not at all be in the build')
}