export function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('zh-Hant-u-nu-hanidec', {
    year: '2-digit',
    month: 'long',
  }).replace(/一〇/g, '十').replace(/一一/g, '十一').replace(/一二/g, '十二')
}
