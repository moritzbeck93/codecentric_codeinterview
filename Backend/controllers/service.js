const Datenbank = require("../models");
const Mitarbeiter = Datenbank.mitarbeiter;

const fetch = require('node-fetch');
const headers = {
    "authorization": "token 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"
}
const url = "https://api.github.com/orgs/codecentric/members"

//Function to load all Mitarbeiter from the Database, not completed
// exports.findAllMitarbeiter = (req, res) => {
//     Mitarbeiter.findAll()
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Error, cannot get Mitarbeiter"
//             });
//         });
// }

//Load all Mitarbeiter from github API and fill Database
const setMitarbeiter = () => {
    fetch(url, { method: 'GET', headers: headers })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            data.forEach(element => {
                let mitarbeiter = {
                    name: element.login
                };
                Mitarbeiter.create(mitarbeiter)
            });
        });
};

exports.setMitarbeiter = setMitarbeiter;


// Not completed, load Mitarbeiter and get their Repos

// function searchRepos(member) {
//     let dict = [];

//     member.forEach(element => {
//         fetch(element.value + "/repos", { method: 'GET', headers: headers })
//             .then((res) => {
//                 return res.json()
//             })
//             .then((data) => {
//                 dict.push({
//                     key: data.owner.login,
//                     value: data.language
//                 });
//             });
//     })

//     console.log(dict);
// }