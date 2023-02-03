//const fs = require('fs');
//import {fs} from 'fs';
const data = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Joel",
                "last": "Kombila"
            },
            "location": {
                "street": {
                    "number": 1,
                    "name": "Sample Street"
                },
                "city": "Pau",
                "state": "Pyrénées Atlantique",
                "country": "France",
                "postcode": 64000,
                "coordinates": {
                    "latitude": "-3.7976",
                    "longitude": "45.2862"
                },
                "timezone": {
                    "offset": "+1:00",
                    "description": "Paris"
                }
            },
            "email": "jolmamboundou@gmail.com",
            "login": {
                "uuid": "972e6032-9f5e-497a-bfe2-06b6be107566",
                "username": "blackbear446",
                "password": "valdepen",
                "salt": "8u3JDPC7",
                "md5": "3e8d7a26e9293a543e26009590454509",
                "sha1": "00cc8615a3c7b1d0653243d384ff769a401f8e6f",
                "sha256": "94026a61f0085184c2a47b18205616900d5b24feb4e59620ed2184fa1acec2d1"
            },
            "dob": {
                "date": "1985-09-12T13:43:06.630Z",
                "age": 37
            },
            "registered": {
                "date": "2010-10-09T06:55:12.781Z",
                "age": 12
            },
            "phone": "05-10-43-34-24",
            "cell": "06-01-85-77-85",
            "id": {
                "name": "INSEE",
                "value": "2850856517416 56"
            },
            "picture": {
                "large": "../img/moi.png",
                "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
            },
            "nat": "FR"
        }
    ],
    "info": {
        "seed": "ee1bf312b05e8022",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}
var positions = [
    { id: "full", male: "Développeur fullstack", female: "Développeuse fullstack"},
    { id: "front",male: "Développeur front-end", female: "Développeuse front-end"},
    { id: "back",male: "Développeur back-end", female: "Développeuse back-end"},
    { id: "embedded",male: "Développeur embarqué", female: "Développeuse embarqué"}
];

var companies = [
    "Safran Helicopter Engine",
    "Blablacar",
    "Microsoft",
    "Klassroom",
    "Citya",
    "Qwant"
]

var specialities =  {
    full: ["Angular/Material/PrimeNG","Python","NodeJs/Nest"],
    front: ["React/Tailwind", "Vue/Material", "Angular/Bootstrap"],
    back: ["NodeJS/Express", "Python/Django"],
    embedded: ["Arduino/C++"]
}

function init(){
    console.log(data)
    var user = data.results[0];
    user.position = positions[0];
    user.company = companies[0];
    user.speciality = specialities[user.position.id][Math.floor(Math.random() * (specialities[user.position.id].length))];
    console.log(user);
    renderFromUser(user);
}

function renderFromUser(user) {
    
    document.querySelector("#person-fullname").innerHTML = user.name.first + " " + user.name.last;
    document.querySelector("#person-firstname").innerHTML = user.name.first;
    document.querySelector("#person-job").innerHTML = user.position[user.gender];
    document.querySelector("#person-position").innerHTML = user.position[user.gender];
    document.querySelector("#person-company").innerHTML = user.company ? "alternant chez " + user.company : "en recherche d'emploi";
    document.querySelector("#person-city").innerHTML = user.location.city + ", " + user.location.country;
    document.querySelector("#person-speciality").innerHTML = user.speciality;
    document.querySelector("#person-speciality").innerHTML = user.speciality;
    document.querySelector("#person-email").href = "mailto:"+user.email;
}

init();