/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';

const Profile = ({ doctorData }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: doctorData.email,
        password: '',
        phone: '',
        bio: '',
    });

    useEffect(() => {
        setFormData({
            name: doctorData?.name,
            email: doctorData?.email,
            phone: doctorData?.phone,
            bio: doctorData?.bio,
        });
    }, [doctorData]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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