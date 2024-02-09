import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    const { name, email, password, role, photo, gender } = req.body;

    try {
        let user = null;

        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        if (user) {
            return res.status(400).json({ message: 'User already exist' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        }
        if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        }

        await user.save();

        res.status(201).json({ success: true, message: 'User successfully created' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Internal server error, Try again' });
    }
};