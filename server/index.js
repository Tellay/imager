require('dotenv').config();
const Express = require('express');
const App = Express();
const PORT = process.env.PORT || 3002;
const Mongoose = require('mongoose');
const Cors = require('cors');
const bodyParser = require('body-parser');
const Images = require('./models/Image');

App.use(bodyParser.json({ limit: "50mb", extended: true }));
App.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
App.use(Cors());

App.get('/:id', (req, res) => {
    const { id } = req.params;
    if(!id) return;

    Images.findOne(
        {
            _id: id
        },
        (err, result) => {
            if(!result) return res.json({ result: "Nothing with that id was found."});
            res.json({ result: result });
        }
    )
});

App.post('/', async (req, res) => {
    const { imageUrl } = req.body;
    const toCreate = await Images.create(
        {
            imageSrc: imageUrl
        }
    );
    
    return res.json({ item: toCreate._id });
});


Mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => error
    ? console.log(error)
    : console.log(`Database successfully connected!`)
);

App.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}.`));