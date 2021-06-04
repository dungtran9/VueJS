<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      @submit.prevent="handleSubmit(onSubmit)"
      v-on:submit.prevent="submitForm"
    >
      <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
        <label>name: </label>
        <input v-model="name" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <br />
      <ValidationProvider
        name="Avatar"
        rules="required|alpha"
        v-slot="{ errors }"
      >
        <label>avatar: </label>
        <input v-model="avatar" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <br />
      <ValidationProvider
        name="Email"
        rules="required|alpha"
        v-slot="{ errors }"
      >
        <label>email: </label>
        <input v-model="email" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <br />
      <button type="submit">Submit</button>
    </form>
  </ValidationObserver>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateUser",
  data: () => ({
    name: "",
    avatar: "",
    email: ""
  }),

  methods: {
    onSubmit() {
      alert("Form has been submitted!");
    },
    submitForm() {
      axios
        .post("https://60b850a2b54b0a0017c0364e.mockapi.io/users", {
          name: this.name,
          avatar: this.avatar,
          email: this.email
        })
        .then(res => {
          console.log(res);
        });
      // .catch(error => {
      //   // error.response.status Check status code
      // });
    }
  }
};
</script>
<style scoped></style>
