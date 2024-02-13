import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id)
            .populate('reviews')
            .select('-password');

        res.status(200).json({ success: true, message: 'Doctor found', data: doctor });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Doctor not found' });
    }
};

export const getAllDoctor = async (req, res) => {
    try {
        const doctors = await Doctor.find({ isApproved: 'approved' }).select('-password');

        res.status(200).json({ success: true, message: 'Doctors found', data: doctors });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not found' });
    }
};

export const getDoctorProfile = async (req, res) => {
    const doctorId = req.userId;

    try {
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }

        const { password, ...rest } = doctor._doc;
        const appointments = await Booking.find({ doctor: doctorId });

        res.status(200).json({ success: true, message: 'Profile info is getting', data: { ...rest, appointments } });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Something went wrong, cannot get' });
    }
};