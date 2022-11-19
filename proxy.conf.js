const PROXY_CONFIG = {
    "/api": {
        "target": "https://localhost:7275/",
        "changeOrigin": true,
        "secure": true,
        "logLevel": "debug"
   }
};
module.exports = PROXY_CONFIG;