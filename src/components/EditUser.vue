<template>
  <ValidationObserver
    v-slot="{ handleSubmit }"
    ref="form"
    @submit.prevent="onSubmit($route.params.id)"
  >
    <form @submit.prevent="handleSubmit()">
      <label></label>
      <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
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
  name: "EditUser",
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.userDetail.name,
      avatar: this.$route.params.userDetail.avatar,
      email: this.$route.params.userDetail.email
    };
  },
  methods: {
    async onSubmit(id) {
      // console.log(this.$refs);
      const isValid = await this.$refs.form.validate();
      console.log(isValid);
      if (!isValid) {
        return;
      } else {
        this.submitForm(id);
        alert("update thanh cong");
      }
    },
    submitForm(id) {
      axios
        .put("https://60b850a2b54b0a0017c0364e.mockapi.io/users/" + id, {
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
