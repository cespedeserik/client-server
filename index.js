function getData() {
    const url = "http://127.0.0.1:8080/jedi"
    fetch(url)
       .then(res => res.text())
           .then(data => console.log(data))
}

async function postData() {
    const jedi = {
        name: "Han",
        surname: "Solo"
    }
    const url = "http://127.0.0.1:8080/jedi"
    const conf = {
        method: "POST",
        body: JSON.stringify(jedi),
        headers: {
            'content-type': "application/json"
        }
    }
    const res = await fetch(url, conf)
    const data = await res.text()
    console.log(data)
    //console.log("...post Data")
}