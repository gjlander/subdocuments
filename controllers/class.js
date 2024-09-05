const Class = require('../schemas/Class');

// get all classes
const getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        if (!classes.length) {
            res.status(200).json({ msg: 'No classes in the DB' });
        } else {
            res.status(200).json({ classes });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

// get one studentClass
const getOneClass = async (req, res) => {
    try {
        const { id } = req.params;
        const studentClass = await Class.findById(id);

        if (studentClass) {
            return res.status(200).json(studentClass);
        }
        res.status(404).json({ msg: 'I did not find this studentClass :(' });
    } catch (error) {
        res.status(500).json(error);
    }
};

// create a new studentClass
const createClass = async (req, res) => {
    try {
        // We grab exactly the keys that we have in the blueprint (Schema)
        const { subject, duration, teacher, difficulty } = req.body;
        const studentClass = await Class.create({
            subject,
            duration,
            teacher,
            difficulty,
        });
        res.status(201).json(studentClass);
    } catch (error) {
        res.status(500).json(error);
    }
};

// update a studentClass

module.exports = {
    getAllClasses,
    getOneClass,
    createClass,
};
