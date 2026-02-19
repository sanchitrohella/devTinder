const adminAuth = (req, res, next) => {
  console.log("Admin Auth Middleware!!!!");
  const token = "xyz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(403).send("UnAuthorized User!!!");
  } else {
    next();
  }
};
const userAuth = (req, res, next) => {
  console.log("User Auth Middleware!!!!");
  const token = "xyz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(403).send("UnAuthorized User!!!");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
