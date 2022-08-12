module.exports = function check(str, bracketsConfig) {
  let arr = str
  for(let i = 0; i < str.length; i++) {
  for(let x = 0; x < bracketsConfig.length; x++) {
    if (arr.includes(bracketsConfig[x].join(""))) {
      arr = arr.slice(0, arr.indexOf(bracketsConfig[x].join(""))) + arr.slice(arr.indexOf(bracketsConfig[x].join("")) + 2)
      }
      }
  }
  return arr.length === 0 ? 1 : 0
}
