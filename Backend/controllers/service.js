const Datenbank = require("../models");
const Mitarbeiter = Datenbank.mitarbeiter;
const operation = datenbank.Sequelize.Op;


exports.findAllMitarbeiter = (req, res) => {
    Mitarbeiter.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error, cannot get Mitarbeiter"
            });
        });
}

export function setMitarbeiter() {
    fetch(url, { method: 'GET', headers: headers })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            data.forEach(element => {
                Mitarbeiter.create(element.login)
            });
            //searchRepos(dict);
        });
}

// Funktion leider nicht komplett fertigstellt

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