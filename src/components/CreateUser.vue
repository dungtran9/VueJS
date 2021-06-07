<template>
  <ValidationObserver
    v-slot="{ handleSubmit }"
    ref="form"
    @submit.prevent="onSubmit()"
  >
    <form @submit.prevent="handleSubmit()">
      <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
        <div>
          <h3>CREATE USER</h3>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >Name</label
          >
          <div class="col-sm-10">
            <input v-model="name" class="form-control" type="text" />
            <div style="text-align: left" class="invalid-feedback d-block">
              {{ errors[0] }}
            </div>
          </div>
        </div>
      </ValidationProvider>
      <br />
      <ValidationProvider name="Avatar" rules="required" v-slot="{ errors }">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >Avatar</label
          >
          <div class="col-sm-10">
            <input v-model="avatar" class="form-control" type="text" />
            <div style="text-align: left" class="invalid-feedback d-block">
              {{ errors[0] }}
            </div>
          </div>
        </div>
      </ValidationProvider>
      <br />
      <ValidationProvider name="Email" rules="required" v-slot="{ errors }">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >Email</label
          >
          <div class="col-sm-10">
            <input v-model="email" class="form-control" type="text" />
            <div style="text-align: left" class="invalid-feedback d-block">
              {{ errors[0] }}
            </div>
          </div>
        </div>
      </ValidationProvider>
      <br />
      <b-button variant="success" type="submit">
        Submit
      </b-button>
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
    async onSubmit() {
      // console.log(this.$refs);
      const isValid = await this.$refs.form.validate();
      console.log(isValid);
      if (!isValid) {
        return;
      } else {
        this.submitForm();
        alert("dang ki thanh cong");
      }
    },
    submitForm() {
      axios
        .post("https://60b850a2b54b0a0017c0364e.mockapi.io/users", {
          name: this.name,
          avatar: this.avatar,
          email: this.email
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped></style>
