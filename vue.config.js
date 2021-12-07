module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "https://husthole.pivotstudio.cn",
        secure: true,
        changeOrigin: true,
      },
    },
    port: 80,
  },
}
