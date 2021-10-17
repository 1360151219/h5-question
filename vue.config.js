module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "http://120.27.239.160",
        secure: false,
        changeOrigin: true,
      },
    },
    port: 80,
  },
}
