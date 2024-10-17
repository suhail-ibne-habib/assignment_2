module.exports = app => {
    const companies = require("../controllers/companyController.js");  // Adjust path if necessary

    var router = require("express").Router();

    // Create a new company
    router.post("/companies", companies.create);

    // Retrieve all companies
    router.get("/companies", companies.findAll);

    // Retrieve a single company by id
    router.get("/companies/:companyId", companies.findOne);

    // Update a company with id
    router.put("/companies/:companyId", companies.update);

    // Delete a company with id
    router.delete("/companies/:companyId", companies.delete);

    // Use the companies routes
    app.use('/api', router);
};
