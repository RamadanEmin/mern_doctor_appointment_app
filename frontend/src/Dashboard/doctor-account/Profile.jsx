/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const Profile = ({ doctorData }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: doctorData.email,
        password: '',
        phone: '',
        bio: '',
        gender: '',
        specialization: '',
        ticketPrice: 0,
        qualifications: [],
    });

    useEffect(() => {
        setFormData({
            name: doctorData?.name,
            email: doctorData?.email,
            phone: doctorData?.phone,
            bio: doctorData?.bio,
            gender: doctorData?.gender,
            specialization: doctorData?.specialization,
            ticketPrice: doctorData?.ticketPrice,
            qualifications: doctorData?.qualifications,
        });
    }, [doctorData]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addItem = (key, item) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: [...prevFormData[key], item]
        }));
    };

    const handleReusableInputChangeFunc = (key, index, event) => {
        const { name, value } = event.target;

        setFormData(prevFormData => {
            const updateItems = [...prevFormData[key]];

            updateItems[index][name] = value;

            return {
                ...prevFormData,
                [key]: updateItems
            };
        });
    };

    const deleteItem = (key, index) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: prevFormData[key].filter((_, i) => i !== index)
        }));
    };

    return (
        <div>
            <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
                Profile Information
            </h2>

            <form>
                <div className="mb-5">
                    <p className="form__label">Name*</p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className="form__input"
                    />
                </div>

                <div className="mb-5">
                    <p className="form__label">Email*</p>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="form__input"
                        readOnly
                        aria-readonly
                        disabled="true"
                    />
                </div>

                <div className="mb-5">
                    <p className="form__label">Phone*</p>
                    <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone number"
                        className="form__input"
                    />
                </div>

                <div className="mb-5">
                    <p className="form__label">Bio*</p>
                    <input
                        type="text"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder="Bio"
                        className="form__input"
                        maxLength={100}
                    />
                </div>

                <div className="mb-5">
                    <div className="grid grid-cols-3 gap-5 mb-[30px]">
                        <div>
                            <p className="form__label">Gender*</p>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="form__input py-3.5"
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <p className="form__label">Specialization*</p>
                            <select
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleInputChange}
                                className="form__input py-3.5"
                            >
                                <option value="">Select</option>
                                <option value="surgeon">Surgeon</option>
                                <option value="neurologist">Neurologist</option>
                                <option value="dermatologist">Dermatologist</option>
                            </select>
                        </div>

                        <div>
                            <p className="form__label">Ticket Price*</p>
                            <input
                                type="number"
                                placeholder="100"
                                name="ticketPrice"
                                value={formData.ticketPrice}
                                onChange={handleInputChange}
                                className='form__input'
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-5">
                    <p className="form__label">Qualification*</p>
                    {formData.qualifications?.map((item, index) => (
                        <div key={index}>
                            <div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <p className="form__label">Starting Date*</p>
                                        <input
                                            type="date"
                                            name="startingDate"
                                            className="form__input"
                                        />
                                    </div>

                                    <div>
                                        <p className="form__label">Ending Date*</p>
                                        <input
                                            type="date"
                                            name="endingDate"
                                            className="form__input"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5 mt-5">
                                    <div>
                                        <p className="form__label">Degree*</p>
                                        <input
                                            type="text"
                                            name="degree"
                                            className="form__input"
                                        />
                                    </div>

                                    <div>
                                        <p className="form__label">University*</p>
                                        <input
                                            type="text"
                                            name="university"
                                            value={item.university}
                                            onChange={(e) => handleQualificationChange(e, index)}
                                            className="form__input"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={(e) => deleteQualification(e, index)}
                                    className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                                >
                                    <AiOutlineDelete />
                                </button>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={addQualification}
                        className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
                    >
                        Add Qualification
                    </button>
                </div>

                <div className="mt-7">
                    <button
                        type="submit"
                        className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg">
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;