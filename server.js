const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
app.listen(PORT, () => console.log(`listening on localhost:${PORT}`))