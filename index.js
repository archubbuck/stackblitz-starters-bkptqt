// run `node index.js` in the terminal

const parser = require("@apidevtools/swagger-parser");

const swagUrl = `https://apitools.dev/swagger-parser/online/sample/swagger.yaml`;

try {
  let api = await parser.validate(swagUrl);
  console.log("API name: %s, Version: %s", api.info.title, api.info.version);
}
catch(err) {
  console.error(err);
}
