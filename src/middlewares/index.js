const commonMiddleware = (req, res, next) => {
  console.log("Do some middleware thing");
  next();
};

export { commonMiddleware };
