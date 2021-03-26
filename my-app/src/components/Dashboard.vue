<template>
  <div class="hello">
    <Header />
    <div class="container mrgnbtm">
      <div class="row">
        <div class="col-md-8">
          <CreateUser @createUser="userCreate($event)" />
        </div>
        <div class="col-md-4">
          <DisplayBoard
            :numberOfUsers="numberOfUsers" @getAllUsers="getAllUsers()"
            :numberOfAccounts="numberOfAccounts" @getAllAccounts="getAllAccounts()"
          />
        </div>
      </div>
    </div>

    <div class="row mrgnbtm">
      <Users v-if="users.length > 0" :users="users" />
    </div>

    <div class="row mrgnbtm">
      <Accounts v-if="accounts.length > 0" :accounts="accounts" />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import CreateUser from "./CreateUser.vue";
import DisplayBoard from "./DisplayBoard.vue";
import Users from "./Users.vue";
import Accounts from "./Accounts.vue";
import {
  getAllUsers,
  getAllAccounts,
  createUser,
} from "../services/UserService";

export default {
  name: "Dashboard",
  components: {
    Header,
    CreateUser,
    DisplayBoard,
    Users,
    Accounts,
  },
  data() {
    return {
      users: [],
      accounts: [],
      numberOfUsers: 0,
      numberOfAccounts: 0,
    };
  },
  methods: {
    getAllUsers() {
      getAllUsers().then((response) => {
        console.log(response);
        this.users = response;
        this.numberOfUsers = this.users.length;
      });
    },

    getAllAccounts() {
      getAllAccounts().then((response) => {
        console.log(response);
        this.accounts = response;
        this.numberOfAccounts = this.accounts.length
      });
    },
    userCreate(data) {
      console.log("data:::", data);
      createUser(data).then((response) => {
        console.log(response);
        this.getAllUsers();
      });
    },
  },
  mounted() {
    this.getAllUsers();
    //this.getAllAccounts();
  },
};
</script>