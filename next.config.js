module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/films",
        destination:
          "https://www.criterion.com/current/category/8-top-10-lists",
      },
    ];
  };
  return {
    rewrites,
    images: {
      domains: ["s3.amazonaws.com"],
    },
  };
};
