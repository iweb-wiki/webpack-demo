const  marked = require('marked')


module.exports = sources => {
    console.log('-----1111', sources)
    // 接收webpack创建入的内容，可以是上个loader返回的内容
    const html = marked(sources);
    // return html
    return `export default ${JSON.stringify(html)}`
    // return 'hello loader'
    // return "console.log('---')"
}