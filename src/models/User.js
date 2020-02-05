const { connecting } = require('./connect');

const save = async (user) => {
    const connection = await connecting();
    const query = `INSERT INTO users 
                  (rut,  names, lastnames, entity_id, commune_id, login, password, phone, email, profile_id)
                  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                  RETURNING *`;
    
    const values = [user.rut, user.names, user.lastnames, user.entity_id, user.commune_id, user.login, user.password, ];
    const result = await connection.query(query, values);
    connection.release();
    return result.rows[0];
}

module.exports = {
    save
}