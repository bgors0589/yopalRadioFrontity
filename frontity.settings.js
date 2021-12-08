const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Radio App",
      "description": "Escuchas Online Buena Música"
    }
  },
  "packages": [
    {
      "name": "radio-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wordpress.yopalradio.com.co",
          "params" : {
            "per_page": 48
          }
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
