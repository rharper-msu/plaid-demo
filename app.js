var http = require('http');
var path = require('path');
var port = 3000;

// Request handler
http.createServer(function (request, response) {

    // ERROR HANDLER
    request.on('error', function (err) {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });

    if (request.method === 'GET' && request.url === '/banks') {


        // response.write('<option value="1">ABC Bank</option>');
        // response.write('<option value="2">Bank America</option>');

        getBanks(response, callback);



        // getBanks(function (err, banks) {
        //     banks.forEach(function (bank) {
        //         response.write('<option value="' + bank.id + '">' + bank.name + '</option>');

        //     }, this);

        // });

    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(port);

// function getBanks(response) {
//     return [{
//         id: '1',
//         name: 'BOA'
//     }];
// }


// setTimeout(function () {
//     return [{
//             id: 1322,
//             name: 'Bank of Colorado'
//         },
//         {
//             id: 1367,
//             name: 'Longmont Security Bank'
//         },
//         {
//             id: 1631,
//             name: 'US Savings'
//         }
//     ];
// }, 1000);
//};



// var callback = function (err, banks) {
//     banks.forEach(function (bank) {
//         response.write('<option value="' + bank.id + '">' + bank.name + '</option>');

//     }, this);
// };

function getBanks(response, callback) {
    console.log('Getting banks. This may take some time.');
    var data = [{
        id: 833,
        name: 'State Bank'
    },{
        id: 1267,
        name: 'Colorado National Bank'
    }];
    var err;

    setTimeout(function () {
        return callback(response, err, data);
    }, 5000);
}

function callback(response, err, data) {
    console.log('*** In callback function ***');

    response.writeHeader(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    response.write('<!DOCTYPE html><html><head><title>Banks</title></head><body><h1>Banks (more to come)</h1>');
    response.write('<div style="margin:40px;">');
    response.write('<select name="banks">');
    response.write('<option value="0">Select your bank ...</option>');

    data.forEach(function (bank) {
        response.write('<option value="' + bank.id + '">' + bank.name + '</option>');

    }, this);

    response.write('</select>');
    response.write('</div>');
    response.write('</html></body>');
    response.end();

    console.log('Completed writing ' + data.length + ' banks');

}