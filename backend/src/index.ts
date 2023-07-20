import express from 'express';
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import {DataSaver} from './data'

dotenv.config()
const app = express();

app.use(express.json());
app.use(bodyParser.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${req.body}`);
    next();
});

app.post('/api', (req, res) => {
    console.log("Api request received: " + JSON.stringify(req.body))
    let url: string = req.body.url
    let label: string = req.body.label

    if (!url.match(new RegExp("\\b(https?|ftp):\\/\\/[^\\s/$.?#].[^\\s]*\\b"))) {
        res.status(400).json({
            error: "Invalid URL"
        });
    }

    const ds: DataSaver = new DataSaver(url, label);
    ds.insert()

    res.status(200).json({
        success: "http://localhost:3000/" + label
    })
});

app.get('/:label', (req, res) => {
    let ds = DataSaver.retrieve(req.params.label)
    if (ds === undefined) {
        console.log('Not found');
        res.redirect('');
    } else {
        res.redirect(ds.url);
    }
})

app.listen(process.env.PORT, () => {
    DataSaver.load();
    console.log(`Server is running at ${process.env.SCHEME}://${process.env.BASE_URL}:${process.env.PORT}`);
});