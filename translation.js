const translation =require('transliteration')

console.log(translation.slugify('张朝阳'))// -隔开
console.log(translation.transliterate('张朝阳'))// 空格隔开
console.log(translation.transliterate('髂髋'))// 错误
console.log(translation.transliterate('苪阮殳靳'))
console.log(translation.transliterate(''))
