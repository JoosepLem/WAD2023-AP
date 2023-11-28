<template>
  <section>
    <div class="login-container">
      <!--      <h2 id="head1"><strong>Welcome to PostIt</strong></h2>-->
      <!--      <div class="create-account">-->
      <!--        <router-link to="/">Create an account</router-link>-->
      <!--      </div>-->
      <!--      <h2>or<br>Log in</h2>-->
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="username">Email:</label>
          <input v-model="username" type="email" id="username" name="username" placeholder="Email" required>
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input v-model="password" type="password" id="password" name="password" placeholder="Password" required>
        </div>


        <div v-if="!isPasswordValid" class="validation-error">
          Password is not valid. Please follow these conditions:
          <ul>
            <li>At least 8 characters and less than 15 characters</li>
            <li>Includes at least one uppercase alphabet character</li>
            <li>Includes at least two lowercase alphabet characters</li>
            <li>Includes at least one numeric value</li>
            <li>Starts with an uppercase alphabet</li>
            <li>Includes the character "_"</li>
          </ul>
        </div>

        <input type="submit" value="Signup">
      </form>
      <!--      <div class="forgot-password">-->
      <!--        <router-link to="/">Forgot Password?</router-link>-->
      <!--      </div>-->
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      username: "",
      password: "",
      isEmailValid: true,
      isPasswordValid: true,
    };
  },
  methods: {
    handleSubmit() {
      this.isPasswordValid = this.validatePassword(this.password);

      if (this.isPasswordValid) {
        this.$router.push('/');
      }
    },
    validatePassword(password) {
      const isLengthValid = password.length >= 8 && password.length < 15;
      const hasUppercase = /[A-Z]/.test(password);
      const hasTwoLowercase = /[a-z].*[a-z]/.test(password);
      const hasNumericValue = /\d/.test(password);
      const startsWithUppercase = /^[A-Z]/.test(password);
      const hasUnderscore = /_/.test(password);

      const isValid =
          isLengthValid &&
          hasUppercase &&
          hasTwoLowercase &&
          hasNumericValue &&
          startsWithUppercase &&
          hasUnderscore;
      return isValid;

    },
  },
};
</script>


<style scoped>

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