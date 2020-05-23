module.exports = function(source){
    console.log(this.query)
    return source.replace('world',this.query.name)
}