import { App } from '../misc/app';

window.castSpell = castSpell;

export class AppAnswer extends App {
  /**
   * @private
   */
  onSuccess(value) {
    // TODO: 在结果框（#result）中显示结果，并隐藏错误框（#error)
    console.log('字符串转换成功，别忘了将结果显示在#result元素中');
  }
  /**
   * @private
   */
  onError(err) {
    // TODO: 显示错误框（#error）并在其中显示错误信息，
    //       清空结果框（#result）中的信息
    console.error('请将该错误显示在#error元素中:', err.message);
  }
}

const SPECIAL = '@'; // 被替换的特殊字符
const MAGIC_CHAR = '♥'; // 替换后的特殊字符
/**
 * 翻转字符串，但保留其中所有“@”的位置，并将“@”替换成“♥”
 * 例如：
 * 输入 > “a@bc@defg”
 * 输出 > “g♥fe♥dcba”
 * @param {string} input - 要转换的字符串，如：“a@bc@defg”
 * @returns {string} 转换后的字符串，如：“g♥fe♥dcba”
 */
async function castSpell(input) {
  // TODO: 在这里编写字符串转换逻辑
  // 将可能的错误通过 throw new Error('错误信息')抛出异常
  // 若输入能够正确处理，返回结果字符串
  throw new Error('请实现 castSpell() 函数');
}