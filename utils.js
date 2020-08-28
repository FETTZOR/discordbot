module.exports = {
  replyForMsg: function (msg) {
    switch (msg) {
      case "ping":
        return "poong!";

      case "website":
        return "yandex.com";
    }
  },
};
