const { createFromContact, getAllContactFromData, createFromJoin, getAllJoinFromData } = require("../controllers/form.controllers");
const {
    createUser,
    getUser, 
  } = require("../controllers/user.controllers"); 
  
  const router = require("express").Router();
  
  router.route("/contact/add").post(createFromContact);
  router.route("/contact/get").get(getAllContactFromData); 

  router.route("/join/add").post(createFromJoin);
  router.route("/join/get").get(getAllJoinFromData); 
  
  // router.route('/update/profile/:email').put(
  //   upload.single("avatar"), 
  //   updateProfileImage);  
  
  
  module.exports = router;