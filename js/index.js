"use strict";

const messageSystem = {
  startFetching() {
    console.log("start fetching");
    setInterval(this.fetchMessages, 1000);
  },

  sendMessage(msg) {
    console.log(msg);
    fetch(`https://thecrew.cc/api/message/create.php?token=${userSystem.getToken()}`, {
        method: 'POST',
        body: msg
      })
      .then(response => {
        console.log(response);
        return response.json();
      })
  },

  fetchMessages() {
    // https://thecrew.cc/api/message/read.php?token=__TOKEN__ GET
    console.log("fetching messages");
    fetch(`https://thecrew.cc/api/message/read.php?token=${userSystem.getToken()}`)
      .then(response => {
        if (response.status == "201") {
          return "no data";
        } else if (response.status == "200") {
          return response.json();
        }
      })
      .then(data => {
        // console.log(data);
        display.renderMessages(data);
      })
  }
};

const display = {
  initFields() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', this.submitHandler);
    const form2 = document.getElementById('messageForm');
    form2.addEventListener('submit', this.sendHandler);
  },
  submitHandler(e) {
    e.preventDefault();
    const email = document.getElementById('emailField').value;
    const password = document.getElementById('passwordField').value;
    userSystem.login(email, password);
  },
  sendHandler(e) {
    e.preventDefault();
    let messageJSON = JSON.stringify({
      message: document.getElementById('messageField').value
    });
    messageSystem.sendMessage(messageJSON);
  },
  hideLogin() {
    document.getElementById('loginWindow').style.display = "none";
  },
  render() {
    if (userSystem.getToken() != null) {
      this.hideLogin();
      messageSystem.startFetching();
    }
  },
  renderMessages(messageBuffer) {
    let htmlString = '';
    messageBuffer.forEach(messageObject => {
      // console.log(messageObject.message);
      htmlString += `
      <div class = "message">
        <span class = "by">${messageObject.handle}</span> 
        <span class = "on">${messageObject.created_at}</span> 
        <p>${messageObject.message}</p> 
      </div>
      `;
    });
    document.getElementById('output').innerHTML = htmlString;
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
    const jsonString = JSON.stringify({
      email: email,
      password: password
    });
    fetch("https://thecrew.cc/api/user/login.php", {
        method: 'POST',
        body: jsonString
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.token != null) {
          this.token = data.token;
          this.saveToken();
          display.render();
        } else {
          alert("User password or email is incorrect!");
        }
      })
  },

  updateUser(password, handle) {
    // https://thecrew.cc/api/user/update.php?token=__TOKEN__ POST
  }
};

display.initFields();
display.render();