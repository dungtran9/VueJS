<template>

  <div>
    <div>
      <router-link :to="{name: 'CreateUser'}">CreateUser</router-link>

    </div>
    <div>
        <tr v-for="(user,index) in users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>
            <img :src="user.avatar"/>
          </td>
          <td>{{ user.email }}</td>
          <td>{{ user.createdAt }}</td>
        </tr>
    </div>
    <div>
      <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        @change="handlePageChange"
      ></b-pagination>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'get-list-user',
  data () {
    return {
      fields: ['id', 'name', 'avatar', 'email', 'createdAt'],
      users: [],
      page: 1,
      count: 100,
      pageSize: 10
    }
  },
  created () {
    this.getListUser()
    this.getRows()
  },
  methods: {
    handlePageChange (value) {
      console.log(this.page)
      this.getListUser(value)
    },
    getListUser (page = 1) {
      axios.get(`https://60b850a2b54b0a0017c0364e.mockapi.io/users/?page=${page}` + '&limit=10')
        .then((res) => {
          this.users = res.data
          console.log(res.data)
        })
        .catch((error) => {
          console.error(error)
        })
    },

    getRows () {
      axios.get(`https://60b850a2b54b0a0017c0364e.mockapi.io/users/`)
        .then((res) => {
          this.count = res.data.length
          console.log(this.count)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
