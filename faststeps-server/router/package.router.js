const { createPackages, findPackages, updateDataPackageOffer, addDataPackageOffer, deleteDataPackageOffer } = require("../controllers/package.controllers");
 
  
  const router = require("express").Router();
  
  router.route("/create/package/single").post(createPackages);

  router.route("/offer/add/:id").post(addDataPackageOffer); 
  router.route("/find/:service/:name").get(findPackages); 

  router.route("/offer/update/:id").put(updateDataPackageOffer); 
  router.route("/offer/delete/:id").put(deleteDataPackageOffer); 

   

  
  
  
  
  module.exports = router;