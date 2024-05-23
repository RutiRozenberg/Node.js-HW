
const mongoose = require('mongoose');

mongoose.set("strict", false);

require('dotenv').config();
const mongo = process.env.DATABASE_URL

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(mongo)
}


module.exports = main