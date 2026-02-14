const express = require("express");
const router = express.Router();

const toDoListController = require("../controller/todolistController");
const authProvider = require("../auth/AuthProvider");
const { protectedResources } = require("../authConfig");

// custom middleware to check auth state
function isAuthenticated(req, res, next) {
  if (!req.session.isAuthenticated) {
    return res.redirect("/auth/signin"); // redirect to sign-in route
  }

  next();
}
// isAuthenticated checks if user is authenticated
router.get(
  "/",
  isAuthenticated,
  authProvider.getToken(protectedResources.toDoListAPI.scopes.read),
  toDoListController.getToDos,
);

router.delete(
  "/",
  isAuthenticated,
  authProvider.getToken(protectedResources.toDoListAPI.scopes.write),
  toDoListController.deleteToDo,
);

router.post(
  "/",
  isAuthenticated,
  authProvider.getToken(protectedResources.toDoListAPI.scopes.write),
  toDoListController.postToDo,
);

module.exports = router;
