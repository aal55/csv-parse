var fs = require("fs");
var parse = require("csv");

var csvFile = "worldcities.csv";

class User {
    constructor(city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id) {
        this.city = city;
        this.city_ascii = city_ascii;
        this.lat = lat;
        this.lng = lng;
        this.country = country;
        this.iso2 = iso2;
        this.iso3 = iso3;
        this.admin_name = admin_name;
        this.capital = capital;
        this.population = population;
        this.id = id;
    }
}

const processData = (err, data) => {
    if (err) {
        console.log(`An error was encountered: ${err}`);
        return;
    }

    data.shift(); // only required if csv has heading row

    const userList = data.map(row => new User(...row));

    analyseUsers(userList);
};

const analyseUsers = userList => {
    const ageSum = userList.reduce((acc, val) => acc += val.age, 0);
    const averageAge = ageSum / userList.length;
    console.log(averageAge);
};

fs.createReadStream(csvFile)
    .pipe(parse({ delimiter: ',' }, processData));