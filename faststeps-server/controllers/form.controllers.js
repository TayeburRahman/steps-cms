const contactFormModel = require("../models/contact_form.models");
const join_formModels = require("../models/join_form.models");
const { sendMailWithGmail } = require("../services/email.services");

const createFromContact = async (req, res) => {
    try {
        const data = req.body; 

 
        // info@1ststeps.com.sa
        const mailData = {
            to: "info@1ststeps.com.sa",
            subject: '1stSteps contact us massage',
            text:"Send a 'Contact' message on your 1stSteps Website",
            name: data?.name,
            inquiry: data?.inquiry,
            email: data?.email,
            telephone: data?.telephone, 
            company:"-No input in Contact!", 
            expertise: "-No input in Contact!",
            cover_letter: "-No input in Contact!",
          }
      
          sendMailWithGmail(mailData)


        const from = await contactFormModel.create(data);
    

        return res.status(200).json({
            from,
            status: "success",
            message: "Join add success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", message: error });
    }
};

const getAllContactFromData = async (req, res) => {
    //   console.log("user", req.user);
    try {
        const join = await contactFormModel.find({});

        return res.status(201).send(join);
    } catch (error) {
        return res.status(401).json({ status: "error", message: error.massages });
    }
}; 

const createFromJoin = async (req, res) => {
    try {
        const data = req.body; 

        console.log(data)
        // jobs@1ststeps.com.sa
        const mailData = {
            to: "jobs@1ststeps.com.sa",
            subject: '1stSteps join us massage',
            text:"Send a 'Join' letter on your 1stSteps Website",
            name: data?.name,
            company: data?.company,
            email: data?.email,
            telephone: data?.telephone, 
            expertise: data?.expertise, 
            cover_letter: data?.cover_letter, 
            inquiry: "-No input in join!",
          }
      
          sendMailWithGmail(mailData)


        const from = await join_formModels.create(data);
    

        return res.status(200).json({
            from,
            status: "success",
            message: "Join add success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", message: error });
    }
};

const getAllJoinFromData = async (req, res) => {
    //   console.log("user", req.user);
    try {
        const join = await join_formModels.find({});

        return res.status(201).send(join);
    } catch (error) {
        return res.status(401).json({ status: "error", message: error.massages });
    }
};

module.exports = {
    createFromContact,  getAllContactFromData, createFromJoin, getAllJoinFromData
}