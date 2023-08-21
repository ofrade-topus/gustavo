/**
 * Candidate test file -- you may write your own 
 * tests here if you wish. This file will not be 
 * included in the final submission.
*/

// Os dois primeiros testes para ler os arquivos 1 e 2 ja estavam feitos 
// assim tambem como o teste que tem no final que é para as questoes escritas.
// Os teste para os arquivos 3, 4 e 5 foi eu quem fiz.

const chai = require("chai");
const fs = require("fs");
const parseAddressFile = require("../src/address_parser.js");
// const sinon = require('sinon');


const { assert, expect }  = chai;
chai.config.truncateThreshold = 0;

 describe("Candidate Test Cases", () => {
  it('should throw an error if path is not string', () => {
    assert.throws(() => parseAddressFile(1), Error, 'Invalid path type');
    assert.throws(() => parseAddressFile([1, 2]), Error, 'Invalid path type');
    assert.throws(() => parseAddressFile(['a', 'b']), Error, 'Invalid path type');
    assert.throws(() => parseAddressFile(true), Error, 'Invalid path type');
  })
  it('should return an array if path is string', () => {
    const response = parseAddressFile('./data/addresses_1.txt')
    expect(Array.isArray(response)).to.be.true
  })
  it('should throw an error if filename is incorrect', () => {
    assert.throws(() => parseAddressFile('./data/incorrect-filename.txt'), Error, 'File not found');
  })
  it("should work on a test of your own", () => {
    const expected = [ 
      { address1: '330 Ashley St.',
        address2: null,
        city: 'Dalton',
        state: 'GA',
        zip: '30721' },
      { address1: '7920 Birchwood Dr.',
        address2: null,
        city: 'Dubuque',
        state: 'IA',
        zip: '52001' },
      { address1: '8 West Street',
        address2: null,
        city: 'Sheboygan',
        state: 'WI',
        zip: '53081' },
      { address1: '164 S. Court Lane',
        address2: null,
        city: 'Lake Jackson',
        state: 'TX',
        zip: '77566' },
      { address1: '9283 South Leatherwood Lane',
        address2: null,
        city: 'Lafayette',
        state: 'IN',
        zip: '47905' },
      { address1: '931 Beach Road',
        address2: null,
        city: 'Haines City',
        state: 'FL',
        zip: '33844' } 
    ];
    const actual = parseAddressFile("./data/addresses_1.txt");
    assert.deepEqual(
      actual, expected, "Failed parsing `./data/addresses_1.txt`"
    );
  });
  it("should pass example 2: a file that contains extra whitespace and `address2` field", () => {
    const expected = [
      {
        address1: "89 Westport Ave.",
        address2: null,
        city: "Pembroke Pines",
        state: "FL",
        zip: "33028",
      },
      {
        address1: "9529 Bayport Rd.",
        address2: null,
        city: "Eau Claire",
        state: "WI",
        zip: "54701",
      },
      {
        address1: "9957 Wakehurst Street",
        address2: "Suite 42",
        city: "Bonita Springs",
        state: "FL",
        zip: "34135",
      },
      {
        address1: "8233 Franklin Drive",
        address2: null,
        city: "Neenah",
        state: "WI",
        zip: "54956",
      },
      {
        address1: "803 Fairview Street",
        address2: null,
        city: "Pueblo",
        state: "CO",
        zip: "81001",
      },
      {
        address1: "3 Creekside Ave.",
        address2: null,
        city: "Miami Gardens",
        state: "FL",
        zip: "33056",
      },
      {
        address1: "375 Hudson Lane",
        address2: null,
        city: "Yakima",
        state: "WA",
        zip: "98908",
      },
      {
        address1: "40 Rose Ave.",
        address2: null,
        city: "Lake Zurich",
        state: "IL",
        zip: "60047",
      },
      {
        address1: "850 New St.",
        address2: null,
        city: "Phoenix",
        state: "AZ",
        zip: "85021",
      },
      {
        address1: "8303 Myers Ave.",
        address2: null,
        city: "Little Falls",
        state: "NJ",
        zip: "07424",
      },
    ];
    const actual =  parseAddressFile("./data/addresses_2.txt");
    assert.deepEqual(
      actual,
      expected,
      "Failed parsing `./data/addresses_2.txt`"
    );
  });
  

  it("should pass addresses_3: a file that contains extra whitespace and `address2` field, just like test 2", () => {
    const expected = [
      {
        address1: "9879 Tailwater Drive",
        address2: null,
        city: "Indianapolis",
        state: "IN",
        zip: "46201",
      },
      {
        address1: "617 Old Woodsman Rd.",
        address2: null,
        city: "Madisonville",
        state: "KY",
        zip: "42431",
      },
      {
        address1: "90 Hilldale St.",
        address2: null,
        city: "Dawsonville",
        state: "GA",
        zip: "30534",
      },
      {
        address1: "650 Hillside Ave.",
        address2: null,
        city: "Dracut",
        state: "MA",
        zip: "01826",
      },
      {
        address1: "68 Ashley Road",
        address2: null,
        city: "Canton",
        state: "GA",
        zip: "30114",
      },
      {
        address1: "814 Edgemont Ave.",
        address2: null,
        city: "Des Plaines",
        state: "IL",
        zip: "60016",
      },
      {
        address1: "8948 River Ave.",
        address2: null,
        city: "Leland",
        state: "NC",
        zip: "28451",
      },
      {
        address1: "74 Argyle St.",
        address2: null,
        city: "Macungie",
        state: "PA",
        zip: "18062",
      },
      {
        address1: "8074 Johnson Street",
        address2: null,
        city: "Teaneck",
        state: "NJ",
        zip: "07666",
      },
      {
        address1: "459 Spruce Drive",
        address2: null,
        city: "Geneva",
        state: "IL",
        zip: "60134",
      },
      {
        address1: "89 County St.",
        address2: null,
        city: "Maumee",
        state: "OH",
        zip: "43537",
      },
      {
        address1: "936 Smith Store Court",
        address2: null,
        city: "Fresno",
        state: "CA",
        zip: "93706",
      },
      {
        address1: "9213 West Iroquois St.",
        address2: null,
        city: "Perrysburg",
        state: "OH",
        zip: "43551",
      },
      {
        address1: "379 Myrtle St.",
        address2: null,
        city: "Kennesaw",
        state: "GA",
        zip: "30144",
      },
      {
        address1: "210 Mill Ave.",
        address2: null,
        city: "Birmingham",
        state: "AL",
        zip: "35209",
      },
      {
        address1: "572 Snake Hill Dr.",
        address2: null,
        city: "Greenfield",
        state: "IN",
        zip: "46140",
      },
      {
        address1: "225 Pineknoll Street",
        address2: "Apt E",
        city: "Northbrook",
        state: "IL",
        zip: "60062",
      },
      {
        address1: "624 Bear Hill Road",
        address2: null,
        city: "San Antonio",
        state: "TX",
        zip: "78213",
      },
      {
        address1: "2 Chapel Avenue",
        address2: null,
        city: "Long Beach",
        state: "NY",
        zip: "11561",
      },
      {
        address1: "6 Brewery St.",
        address2: null,
        city: "West Babylon",
        state: "NY",
        zip: "11704",
      },
      {
        address1: "9181 Surrey Dr.",
        address2: null,
        city: "Clayton",
        state: "NC",
        zip: "27520",
      },
      {
        address1: "35 Belmont Street",
        address2: null,
        city: "Raleigh",
        state: "NC",
        zip: "27603",
      },
      {
        address1: "588B Church Ave.",
        address2: null,
        city: "Reidsville",
        state: "NC",
        zip: "27320",
      },
    ];
    const actual = parseAddressFile("./data/addresses_3.txt");
    assert.deepEqual(
      actual,
      expected,
      "Failed parsing `./data/addresses_3.txt`"
    );
  });
  it("should pass addresses_4: a file that contains extra whitespace and `address2` field, just like test 2", () => {
    const expected = [
      {
        address1: "19 Birchwood Ave.",
        address2: null,
        city: "Menasha",
        state: "WI",
        zip: "54952",
      },
      {
        address1: "9612 West St Louis St.",
        address2: null,
        city: "Appleton",
        state: "WI",
        zip: "54911",
      },
      {
        address1: "35 Edgemont Dr.",
        address2: null,
        city: "Tucson",
        state: "AZ",
        zip: "85718",
      },
      {
        address1: "468 W. Sherman Ave.",
        address2: null,
        city: "Piqua",
        state: "OH",
        zip: "45356",
      },
      {
        address1: "9 E. Harrison Rd.",
        address2: null,
        city: "Woburn",
        state: "MA",
        zip: "01801",
      },
      {
        address1: "890 St Paul Ave.",
        address2: null,
        city: "Cumberland",
        state: "RI",
        zip: "02864",
      },
      {
        address1: "53 Grand Street",
        address2: null,
        city: "Newark",
        state: "NJ",
        zip: "07103",
      },
      {
        address1: "8675 Gainsway Dr.",
        address2: null,
        city: "Thornton",
        state: "CO",
        zip: "80241",
      },
      {
        address1: "616 Trenton Road",
        address2: null,
        city: "Oconomowoc",
        state: "WI",
        zip: "53066",
      },
      {
        address1: "51 Berkshire Court",
        address2: null,
        city: "Oswego",
        state: "NY",
        zip: "13126",
      },
      {
        address1: "387 Country Club Ave.",
        address2: null,
        city: "Dracut",
        state: "MA",
        zip: "01826",
      },
      {
        address1: "119A Old Lower River Ave.",
        address2: null,
        city: "Clarksburg",
        state: "WV",
        zip: "26301",
      },
      {
        address1: "7 Rockcrest Dr.",
        address2: null,
        city: "Augusta",
        state: "GA",
        zip: "30906",
      },
      {
        address1: "14 Rock Creek Drive",
        address2: null,
        city: "Coraopolis",
        state: "PA",
        zip: "15108",
      },
      {
        address1: "34 Corona Dr.",
        address2: null,
        city: "Natchez",
        state: "MS",
        zip: "39120",
      },
      {
        address1: "50 Beech Ave.",
        address2: null,
        city: "Glastonbury",
        state: "CT",
        zip: "06033",
      },
      {
        address1: "24 Andover Street",
        address2: null,
        city: "Elizabeth City",
        state: "NC",
        zip: "27909",
      },
      {
        address1: "9037 South Fulton St.",
        address2: null,
        city: "Bangor",
        state: "ME",
        zip: "04401",
      },
      {
        address1: "474 Overlook St.",
        address2: null,
        city: "Conyers",
        state: "GA",
        zip: "30012",
      },
      {
        address1: "78 West Union Rd.",
        address2: null,
        city: "Schaumburg",
        state: "IL",
        zip: "60193",
      },
      {
        address1: "9 Jones Ave.",
        address2: null,
        city: "Clementon",
        state: "NJ",
        zip: "08021",
      },
      {
        address1: "7272 Lees Creek Lane",
        address2: null,
        city: "Oxford",
        state: "MS",
        zip: "38655",
      },
      {
        address1: "13 2nd Court",
        address2: "Suite 27",
        city: "Erlanger",
        state: "KY",
        zip: "41018",
      },
    ];
    const actual = parseAddressFile("./data/addresses_4.txt");
    assert.deepEqual(
      actual,
      expected,
      "Failed parsing `./data/addresses_4.txt`"
    );
  });
  it("should pass file addresses_5: a file with no `address2` and no extra whitespace", () => {
    const expected = [
      {
        address1: "999 Deerfield Drive",
        address2: null,
        city: "Dorchester",
        state: "MA",
        zip: "02125",
      },
      {
        address1: "41 Brown Ave.",
        address2: null,
        city: "Rossville",
        state: "GA",
        zip: "30741",
      },
      {
        address1: "967 10th Avenue",
        address2: null,
        city: "Endicott",
        state: "NY",
        zip: "13760",
      },
      {
        address1: "898 Grand Road",
        address2: null,
        city: "Skokie",
        state: "IL",
        zip: "60076",
      },
      {
        address1: "10 High Point Avenue",
        address2: null,
        city: "Trussville",
        state: "AL",
        zip: "35173",
      },
      {
        address1: "792 Princess Court",
        address2: null,
        city: "Sidney",
        state: "OH",
        zip: "45365",
      },
      {
        address1: "776 Logan St.",
        address2: null,
        city: "Yuma",
        state: "AZ",
        zip: "85365",
      },
      {
        address1: "18 Hillcrest Ave.",
        address2: null,
        city: "Little Rock",
        state: "AR",
        zip: "72209",
      },
      {
        address1: "70 Shirley Rd.",
        address2: null,
        city: "Atlantic City",
        state: "NJ",
        zip: "08401",
      },
      {
        address1: "7631 Elizabeth Street",
        address2: null,
        city: "Chattanooga",
        state: "TN",
        zip: "37421",
      },
      {
        address1: "7127 Fordham Ave.",
        address2: null,
        city: "Jonesborough",
        state: "TN",
        zip: "37659",
      },
      {
        address1: "804 Rockville Street",
        address2: null,
        city: "Jamaica",
        state: "NY",
        zip: "11432",
      },
      {
        address1: "52 Hanover Avenue",
        address2: null,
        city: "Richmond",
        state: "VA",
        zip: "23223",
      },
      {
        address1: "52 Belmont Dr.",
        address2: null,
        city: "Clifton",
        state: "NJ",
        zip: "07011",
      },
      {
        address1: "7965 East Mill Lane",
        address2: null,
        city: "East Northport",
        state: "NY",
        zip: "11731",
      },
      {
        address1: "7081 Spring Street",
        address2: null,
        city: "Wyoming",
        state: "MI",
        zip: "49509",
      },
      {
        address1: "991 Foxrun Street",
        address2: null,
        city: "Casselberry",
        state: "FL",
        zip: "32707",
      },
      {
        address1: "404 Prince St.",
        address2: null,
        city: "Indian Trail",
        state: "NC",
        zip: "28079",
      },
      {
        address1: "76 West Prairie Drive",
        address2: null,
        city: "Milledgeville",
        state: "GA",
        zip: "31061",
      },
      {
        address1: "424 Central Drive",
        address2: null,
        city: "Newnan",
        state: "GA",
        zip: "30263",
      },
      {
        address1: "157 Manor St.",
        address2: null,
        city: "Port Huron",
        state: "MI",
        zip: "48060",
      },
      {
        address1: "23 Valley View Ave.",
        address2: null,
        city: "Boca Raton",
        state: "FL",
        zip: "33428",
      },
      {
        address1: "7019 Ashley Drive",
        address2: null,
        city: "Fairburn",
        state: "GA",
        zip: "30213",
      },
      {
        address1: "725 East Ramblewood Court",
        address2: null,
        city: "Simpsonville",
        state: "SC",
        zip: "29680",
      },
      {
        address1: "931 Harvard Ave.",
        address2: null,
        city: "Stillwater",
        state: "MN",
        zip: "55082",
      },
      {
        address1: "8 Middle River Road",
        address2: null,
        city: "Wilmette",
        state: "IL",
        zip: "60091",
      },
      {
        address1: "7801 Wood Road",
        address2: null,
        city: "Centreville",
        state: "VA",
        zip: "20120",
      },
      {
        address1: "943 Jennings Drive",
        address2: null,
        city: "New Brunswick",
        state: "NJ",
        zip: "08901",
      },
      {
        address1: "21 Kirkland Drive",
        address2: null,
        city: "Lincolnton",
        state: "NC",
        zip: "28092",
      },
      {
        address1: "73 SW. Brickell Lane",
        address2: null,
        city: "Oxnard",
        state: "CA",
        zip: "93035",
      },
      {
        address1: "409 Hillcrest Street",
        address2: null,
        city: "Jonesboro",
        state: "GA",
        zip: "30236",
      },
      {
        address1: "96 New Saddle Avenue",
        address2: null,
        city: "Miamisburg",
        state: "OH",
        zip: "45342",
      },
      {
        address1: "7690 Glendale St.",
        address2: null,
        city: "Branford",
        state: "CT",
        zip: "06405",
      },
    ];
   try {
      const actual = parseAddressFile("./data/addresses_5.txt");
      assert.deepEqual(
        actual,
        expected,
        "Failed parsing `./data/addresses_5.txt`"
      );
    } catch (error) {
      assert.fail(`Error occurred while parsing the address file: ${error.message}`);
    }
  });

  it("should pass file addresses_custom", () => {
    const expected = [
      {
        address1: "999 Deerfield Drive",
        address2: null,
        city: null,
        state: "MA",
        zip: "02125",
      },
      {
        address1: "41 Brown Ave.",
        address2: null,
        city: "Rossville",
        state: null,
        zip: "30741",
      },
      {
        address1: "967 10th Avenue",
        address2: null,
        city: "Endicott",
        state: "NY",
        zip: null,
      },
    ];
   try {
      const actual = parseAddressFile("./data/addresses_custom.txt");
      assert.deepEqual(
        actual,
        expected,
        "Failed parsing `./data/addresses_custom.txt`"
      );
    } catch (error) {
      assert.fail(`Error occurred while parsing the address file: ${error.message}`);
    }
  });
});


// describe("Written response", () => {
//   it("has been modified", done => {
//     const originalLength = 542;
//     const errMsg = "Please modify candidate-written-reseponse.md";
//     fs.readFile("./candidate-written-response.md", (err, file) => {
//       if(err) {
//         done(err)
//       }
//       assert.isAbove(file.length, originalLength, errMsg);
//       done();
//     });
//   });
// });



