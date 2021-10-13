module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "http://10.19.149.64:8080/",
        secure: false,
        changeOrigin: true,
      },
    },
    port: 80,
  },
}
