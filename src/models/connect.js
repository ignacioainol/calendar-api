const { Pool } = require("pg");

const pool = new Pool({
    user : "krgwtsdd",
    host : "rajje.db.elephantsql.com",
    database : "krgwtsdd",
    password : "u9oI8vV2OJMdiA1ECpYdVKe3QClRXr0Y"
});

const connecting = async () => {
    const client = await pool.connect();
    return client;
};

exports.connecting = connecting;
