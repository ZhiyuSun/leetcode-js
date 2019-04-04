export default (arr, n) => {
  // 计数器
  let max = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === 0) {
      if (i === 0 && arr[1] === 0) {
        max++
        i++
      } else if (i === len - 1 && arr[len - 2] === 0) { // 修复bug，教程里未考虑右边界的情况
        max++
        i++
      } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
        max++
        i++
      }
    }
  }
  return max >= n
}
