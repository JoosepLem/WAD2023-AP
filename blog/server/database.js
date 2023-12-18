const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "9112", // Enter your password here
    database: "testWad",
    host: "localhost",
    port: "5432"
});

const execute = async (createTblQuery, insertDataQuery) => {
    try {
        await pool.connect();
        await pool.query(createTblQuery);
        if (insertDataQuery) {
            await pool.query(insertDataQuery);
        }
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQueryUsers = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL
    );`;

execute(createTblQueryUsers).then(result => {
    if (result) {
        console.log('Table "users" created or already exists.');
    }
});

const createTblQueryPosts = `
    CREATE TABLE IF NOT EXISTS "posts" (
        id SERIAL PRIMARY KEY,
        body TEXT NOT NULL,
        date DATE NOT NULL DEFAULT CURRENT_DATE
    );`;

const insertDataQueryPosts = `
    INSERT INTO "posts" (body)
    SELECT * FROM (VALUES 
        ('This course will introduce students to key concepts and technologies for developing modern web applications.'),
        ('JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display  information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.'),
        ('Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library is focused on the view layer only. Advanced features required for complex applications such as routing, state management, and build tooling are offered via officially maintained supporting libraries and packages.')
    ) AS tmp(body)
    WHERE NOT EXISTS (SELECT 1 FROM "posts");
`;

execute(createTblQueryPosts, insertDataQueryPosts).then(result => {
    if (result) {
        console.log('Table "posts" created with initial data.');
    }
});

module.exports = pool;
