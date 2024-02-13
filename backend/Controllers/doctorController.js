import Doctor from "../models/DoctorSchema.js";

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