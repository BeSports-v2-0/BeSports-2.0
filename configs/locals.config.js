module.exports = app => {
    app.locals.secret = process.env.TOKEN_MAP
    app.locals.title = 'BeSports'
}