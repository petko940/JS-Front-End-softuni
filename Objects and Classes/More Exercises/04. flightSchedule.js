function flightSchedule(arr) {
    let flights = {};
    let sectors = arr[0];

    for (const iterator of sectors) {
        let [sector, destination] = iterator.split(' ');
        flights[sector] = {
            Destination: destination,
            Status: 'Ready to fly'
        };
    }

    let changedStatuses = arr[1];

    for (const iterator of changedStatuses) {
        let [flight, status] = iterator.split(' ');
        Object.keys(flights).forEach(element => {
            if (element === flight) {
                flights[element].Status = status;
            }
        });
    }

    let flightStatus = arr[2][0];

    if (flightStatus === 'Ready to fly') {
        Object.values(flights).forEach(element => {
            if (element.Status === 'Ready to fly') {
                console.log(element);
            }
        });
    } else {
        Object.values(flights).forEach(element => {
            if (element.Status === 'Cancelled') {
                console.log(element);
            }
        });
    }

}



// flightSchedule(
//     [['WN269 Delaware',
//    'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
// 	'WN612 Cancelled',
// 	'WN1173 Cancelled',
// 	'SK430 Cancelled'],
// 	['Cancelled']
// ]

// )

// flightSchedule([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK330 Cancelled'],
//  ['Ready to fly']
// ]
// )