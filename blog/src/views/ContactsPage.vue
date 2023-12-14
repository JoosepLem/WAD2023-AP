<!-- src/components/Contacts.vue -->
<template>
    <div class="contacts-wrapper">
      <h1>Contacts Page</h1><br>
      <h2>Our contact information:</h2>
      <ul class="contacts-list">
        <li v-for="contact in contacts" :key="contact.id" class="contact-item">
          <strong>{{ contact.name }}</strong>: {{ contact.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contacts: [
          { id: 1, name: 'Nikita Filin', email: 'nikitafilin@gmail.com' },
          { id: 2, name: 'Johann Mattias Tamm', email: 'johannmattiastamm@gmail.com' },
          { id: 3, name: 'Joosep Lember', email: 'lemberjoosep01@gmail.com'}
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Component-specific styles go here */
  .contacts-wrapper {
    width: 100%;
    margin: 30px auto;
    text-align: center;
  }
  
  .contacts-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    align-items: center;
  }
  
  .contact-item {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 40%;
  }
  
  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    color: black;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: black;
  }
  
  </style>
  