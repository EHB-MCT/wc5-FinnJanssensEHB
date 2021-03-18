"use strict";

const messageSystem = {
  startFetching() {
  },

  sendMessage(msg) {
    // https://thecrew.cc/api/message/create.php?token=__TOKEN__ POST
  },

  fetchMessages() {
    // https://thecrew.cc/api/message/read.php?token=__TOKEN__ GET
  }
};

const userSystem = {
  token: "",
  loggedIn: false,

  saveToken() {
    localStorage.setItem("token", this.token);
  },

  getToken() {
    return localStorage.getItem("token");
  },

  logout() { 
    localStorage.removeItem("token");
  },

  login(email, password) {
    // https://thecrew.cc/api/user/login.php POST
  },

  updateUser(password, handle) {
    // https://thecrew.cc/api/user/update.php?token=__TOKEN__ POST
  }
};

const display = {
  initFields() {
  }
};

  display.initFields();