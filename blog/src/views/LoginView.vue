<template>
  <section>
    <div class="login-container">
        <div class="input-group">
          <label for="email">Email</label>
          <input id="email" type="email" name="email" required v-model="email">
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input id="password" type="password" name="password" required v-model="password">
        </div>
      <div class="buttons">
        <button class="login" @click="LogIn">Log in</button>
        <span>or</span>
        <button class="signup" @click='this.$router.push("/signup")'>Sign up</button>
      </div>


    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods:{
    LogIn() {
      var data = {email: this.email, password: this.password};
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        credentials: 'include', // Don't forget to specify this if you need cookies
        body: JSON.stringify(data)})
          .then((response) => response.json())
          .then(() => {
            location.assign("/");})
          .catch((e) => {
            console.log("error");});
    },
  },
};
</script>


<style scoped>

.buttons{
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.login, .signup{
  cursor: pointer;
  width: 20%;
  height: 100%;
  border-radius: 10px;
  border: none;
  background-color: deepskyblue;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.login:hover, .signup:hover{
  opacity: 0.7;
}

.validation-error {
  color: red;
  margin-top: 5px;
  text-align: left;
}

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

.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

label {
  width: 10%;
  margin-right: 10px;
  white-space: nowrap;
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

input[type="email"],
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
  text-shadow: 0.5px 0.5px 0.5px gray;
}


@media (max-width: 768px) {
  body {
    flex-direction: column;
  }

  .login-container {
    width: 90%;
  }

  .input-group {
    flex-direction: column;
    align-items: flex-start;
  }

  label {
    margin-right: 0;
    margin-bottom: 5px;
  }

  input[type="email"],
  input[type="password"] {
    width: 100%;
  }

  input[type="submit"] {
    width: auto;
  }
}
</style>