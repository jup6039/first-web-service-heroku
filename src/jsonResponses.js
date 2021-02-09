const randomNumberJSON = (max = 1) => {
  let max2 = Number(max); // cast max to a Number
  max2 = !max2 ? 1 : max2; // if max is not a number because it is "falsy" NaN, default to 1
  max2 = max2 < 1 ? 1 : max2; // if max is less than 1 default to 1

  const number = Math.random() * max2;
  const responseObj = {
    timestamp: new Date(),
    number,
  };
  return JSON.stringify(responseObj);
};

const getRandomNumberResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(randomNumberJSON(params.max));
  response.end();
};

module.exports.getRandomNumberResponse = getRandomNumberResponse;
