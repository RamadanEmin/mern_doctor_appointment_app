/* eslint-disable react/prop-types */

const Profile = ({ doctorData }) => {
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
                        placeholder="Full Name"
                        className="form__input"
                    />
                </div>

                <div className="mb-5">
                    <p className="form__label">Email*</p>
                    <input
                        type="email"
                        name="email"
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
                        placeholder="Phone number"
                        className="form__input"
                    />
                </div>

                <div className="mb-5">
                    <p className="form__label">Bio*</p>
                    <input
                        type="text"
                        name="bio"
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