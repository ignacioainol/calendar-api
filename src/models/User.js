const { connecting } = require('./connect');

const save = async (user) => {
    const connection = await connecting();
    const query = `INSERT INTO users 
                  (user_name,  user_lastname, user_email, user_address, user_phonenumber)
                  VALUES($1, $2, $3, $4, $5)
                  RETURNING *`;
    
    const values = [user.name, user.lastname, user.email, user.address, user.phonenumber];
    const result = await connection.query(query, values);
    connection.release();
    return result.rows[0];
}

module.exports = {
    save
}