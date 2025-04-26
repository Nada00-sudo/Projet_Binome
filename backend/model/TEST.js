const pool = require("../config/db");

exports.AjoutModel = async (name) => {
    const result = await pool.query(
        `INSERT INTO public.test (name) VALUES ($1) returning *`,
        [name]
    );
    return result.rows;
};

exports.GetModel = async (id) => {
    const result = await pool.query(
        `select * from public.test where id=$1`,
        [id]
    );
    return result.rows[0];
};