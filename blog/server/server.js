const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));

app.use(express.json());
app.use(cookieParser());

const secret = "gdgdhdbcb770785rgdzqws";
const maxAge = 60 * 60;

const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
}

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});


app.get('/auth/authenticate', async(req, res) => {
    const token = req.cookies.jwt; // assign the token named jwt to the token const
    let authenticated = false; // a user is not authenticated until proven the opposite
    try {
        if (token) {
            await jwt.verify(token, secret, (err) => { //token exists, now we try to verify it
                if (err) { // not verified, redirect to login page
                    console.log(err.message);
                    res.send({ "authenticated": authenticated }); // authenticated = false
                } else { // token exists and it is verified
                    authenticated = true;
                    res.send({ "authenticated": authenticated }); // authenticated = true
                }
            })
        } else {
            res.send({ "authenticated": authenticated }); // authenticated = false
        }
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

app.post('/auth/signup', async(req, res) => {
    try {
        const { email, password } = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length !== 0) return res.status(401).json({ error: "User is already registered" });

        const salt = await bcrypt.genSalt();
        const bcryptPassword = await bcrypt.hash(password, salt)
        const authUser = await pool.query(
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        const token = await generateJWT(authUser.rows[0].id); // generates a JWT by taking the user id as an input (payload)
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: authUser.rows[0].id })
            .send;
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

app.post('/auth/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

        const token = await generateJWT(user.rows[0].id);
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

app.get('/auth/logout', (req, res) => {
    res.status(202).clearCookie('jwt').json({ "Msg": "cookie cleared" }).send
});


app.post('/post/add-post', async(req, res) => {

    try {
        const data = req.body.data;

        if (data != null){
            const addPost = await pool.query(
                "INSERT INTO posts(body) values ($1)", [data]
            );
            res
                .status(201)
                .json({ status: "success" })
                .send;
        }

    } catch (error) {
        res.status(401).json({ error: error.message });
    }
})


app.get('/post/get/:id', async (req, res) => {
    const postId = parseInt(req.params.id);

  try {
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);

    if (result.rows.length > 0) {
      const post = result.rows[0];
      res.json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


app.put('/post/update/:id', async (req, res) => {
    const postId = parseInt(req.params.id);
    const updatedBody = req.body.body;
  
    try {
      const result = await pool.query('UPDATE posts SET body = $1 WHERE id = $2 RETURNING *', [updatedBody, postId]);
  
      if (result.rows.length > 0) {
        const updatedPost = result.rows[0];
        res.json(updatedPost);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
})


app.get('/post/get-all', async (req, res) => {
    try {
        const posts = await  pool.query(
            "SELECT * FROM posts"
        )
        res.json(posts.rows);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
})


app.delete('/post/delete-all', async (req, res) => {
    try {
      const deleteposts = await pool.query("DELETE FROM posts");
  
      res.json(deleteposts)
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
  });   


  app.delete('/post/delete/:id', async (req, res) => {
    const postId = parseInt(req.params.id);
  
    try {
      const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [postId]);
  
      if (result.rows.length > 0) {
        const deletedPost = result.rows[0];
        res.json(deletedPost);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });