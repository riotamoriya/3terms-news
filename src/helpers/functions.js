export const cutNhkInfo = (str) => {
  return str.replace(/ - nhk.or.jp/g, '');
}

export const replace3dots = (str) => {
  const fixedStr = str ? str.replace(/…/g, '..') : '*** 情 報 取 得 不 可 ***'
  return fixedStr;
}

const convertToKanji = (num) => {
  const kanjiNumbers = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  return num.split('').map(n => kanjiNumbers[n]).join('');
};



export const formatTime = (dateString) => {
  // UTCの日時をローカルの日時に変換
  const date = new Date(dateString);

  // 日付と時間のフォーマット
  const year = convertToKanji(date.getFullYear().toString());
  const month = convertToKanji((date.getMonth() + 1).toString());
  const day = convertToKanji(date.getDate().toString());
  const hours = convertToKanji(date.getHours().toString());
  const minutes = convertToKanji(date.getMinutes().toString());
  const seconds = convertToKanji(date.getSeconds().toString());

  // フォーマットされた日付と時間
  return `${year}年${month}月${day}日 ${hours}時${minutes}分${seconds}秒`;
};