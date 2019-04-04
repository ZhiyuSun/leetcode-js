export default (arr) => {
  // 对这副牌进行排序，升序、降序都可以
  if (arr.length < 2) {
    return false
  } // 修复bug，数组长度过小，直接返回false
  arr.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER
  let dst = []
  let result = true
  console.log(arr)
  for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
    tmp.push(arr[i])
    for (let j = i + 1; j < len + 1; j++) { // 原来写的是len-1，有缺陷,最后一个组合不会写进dst
      if (arr[i] === arr[j]) {
        tmp.push(arr[j])
      } else {
        if (min > tmp.length) {
          min = tmp.length
        }
        console.log(min)
        dst.push([].concat(tmp))
        tmp.length = 0
        tmp.push(arr[j]) // 修复bug，否则将会漏掉arr[j]
        i = j
        break
      }
    }
  }
  // 课程的解答有缺陷，补充如果min小于2，应该直接返回false
  if (min < 2) {
    result = false
    return false
  }
  console.log(dst)
  dst.every(item => {
    if (item.length % min !== 0) {
      result = false
      return false
    }
  })
  return result
}
