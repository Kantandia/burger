var orm = require('../config/orm.js');


var burgers = {

    all: function (cb) {
        orm.all('Burgers', function (res) {
            cb(res);
        });
    },
}