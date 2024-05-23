
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

async function main() {

    await mongoose.connect(process.env.DATABASE_URL)
}


module.exports = main