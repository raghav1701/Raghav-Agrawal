require('dotenv').config();
const mongoose = require('mongoose');
const { Role } = require('../models/Role');

let roles = ['Student', 'Teacher'];

mongoose.connection.on(
    'error',
    console.error.bind(console, 'Connection Error:')
);

// Add roles to the database
mongoose.connection.on('open', () => {
    roles.forEach(async (role) => {
        try {
            const newRole = new Role({ name: role });
            await newRole.save();
        } catch (e) {
            console.log(e);
        }
    });
});

mongoose.connect(`mongodb://${process.env.MONGO_URI}/class`);

// mongoose.connect(`mongodb+srv://aditya:ujegePUqqLWfsFdm@classroomcluster.wp4nf.mongodb.net/class`);
