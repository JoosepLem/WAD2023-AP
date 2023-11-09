<template>
  <section>
    <div class="login-container">
      <h2 id="head1"><strong>Welcome to PostIt</strong></h2>
      <div class="create-account">
        <a href="">Create an account</a>
      </div>
      <h2>or<br>Log in</h2>
      <form action="/index.html" method="">
        <input type="text" id="username" name="username" placeholder="Email" required>
        <input type="password" id="password" name="password" placeholder="Password" required>

        <input type="submit" value="Login">
      </form>
      <div class="forgot-password">
        <a href="">Forgot Password?</a>
      </div>
    </div>
  </section>
</template>


<style>
body {
  font-family: 'Times New Roman', Times, serif, monospace;
  background-color: #f2f2f2;
}

section{
  position: relative;
  height: 500px;
}


.login-container {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 40%;
  /*max-width: 400px;*/
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#head1 {
  margin-top: auto;
  letter-spacing: 2px;
}

h2 {
  text-align: center;
  font-weight: normal;
  font-size: large;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 50%;
  margin: auto;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

input[type="submit"] {
  width: 25%;
  margin: auto;
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #0056b3;
}

.forgot-password {
  padding-top: 10px;
  text-align: center;
}

.create-account {
  padding-top: 10px;
  text-align: center;
}

.login-container p {
  font-style: italic;
}

.login-container > h2 {
  color: black;
}

.create-account + div {
  font-weight: bold;
}

.create-account ~ * {
  text-shadow: 1px 1px 1px gray;
}


@media (max-width: 768px) {
  body {
    flex-direction: column;
  }

  .login-container {
    width: 90%;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
  }

  input[type="submit"] {
    width: auto;
  }
}
</style>
