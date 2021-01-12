const  marked = require('marked')


module.exports = sources => {
    console.log(sources)
    const html = marked(sources);
    return html
    // return `export default ${JSON.stringify(html)}`
    // return 'hello loader'
    // return "console.log('---')"
}