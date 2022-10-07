exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /lottie-player/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }