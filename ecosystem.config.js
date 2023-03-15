module.exports = {
    apps : [
        {
          name: "DevEvolution",
          script: "index.js",
          watch: true,
		  time: true,
          env: {
            "NODE_ENV": "development"
          },
          env_production: {
            "NODE_ENV": "production"
          }
       }
    ]
  };              
