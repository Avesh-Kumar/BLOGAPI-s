require('dotenv').config();
const config={
    port:process.env.PORT,
    mongouri:process.env.mongo_DB_url
};
module.exports=config;