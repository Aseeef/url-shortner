import React, {useState} from 'react';
import Footer from './Footer'
import Header from "./Header";

function App() {

    const [url, setUrl] = useState('')
    const [label, setLabel] = useState('')
    const handleSubmit = async () => {
        const submit = await fetch("", {
            method: 'POST',
            body: JSON.stringify({
                url: url,
                label: label
            })
        })
        console.log(submit)
    }

    return (
        <>
            <Header/>
            <div className="container">
                <section className="card" style={{marginTop: 100, marginBottom: 200}}>
                    <h1>Aseefian URL Shortner</h1>
                    <form>
                        <div className="md-input-group">
                            <input
                                className="form-control md-input"
                                type="text"
                                placeholder="URL"
                                inputMode="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>
                        <div className="d-flex md-input-group">
                            <p className="md-input form-control" style={{width: 250}}>
                                https://go.aseef.dev/
                            </p>
                            <input
                                className="form-control md-input"
                                type="text"
                                placeholder="{enter path}"
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                            />
                            <p className="md-input form-control" style={{width: 50}}>
                                /
                            </p>
                        </div>
                    </form>
                    <button className="btn btn-primary d-block md-btn w-100" type="button"
                            onClick={() => handleSubmit()}>
                        Shorten!
                    </button>
                </section>
            </div>
            <Footer/>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/Material-Inputs-material-input.js"></script>
        </>
    );
}

export default App;
