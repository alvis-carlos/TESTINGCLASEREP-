const app = express()


app.use(require('./requires/author1'));
app.use(require('./requires/author2'));

app.listen(3000)
