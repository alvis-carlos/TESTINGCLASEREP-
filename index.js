const app = express()


app.use(required('./requires/author1'));
app.use(required('./requires/author2'));

app.listen(3000)
