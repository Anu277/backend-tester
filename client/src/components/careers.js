import Lottie from "lottie-react";
import React, { useState } from "react";
import carrerAnim from '../assets/animations/career.json';

const Careers = () => {
    const [isLoading, setIsLoading] = useState(false); // New loading state

    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        role: '',
        domain: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        location: '',
        linkedin: '',
        github: '',
        coverLetter: ''
    });
    const [resume, setResume] = useState(null);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const sendMail = async (e) => {

        setIsLoading(true)
        e.preventDefault();
        const formDataToSend = new FormData();

        // Append form data
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        // Append file
        if (resume) {
            formDataToSend.append('resume', resume);
        }

        try {
            const res = await fetch('/careers', {
                method: "POST",
                body: formDataToSend,
            });

            if (res.ok) {
                alert("Application submitted successfully!");
            } else {
                alert("Failed to submit application.");
            }

            setIsLoading(false)

        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    return (
        <div className="container m-auto min-h-screen bg-gradient-to-r flex flex-col items-center justify-center">
            <div className="max-w-280 m-auto text-center my-5">
                <h1 className="text-4xl font-bold m-2">Career Section</h1>
                <p className="mt-2 italic">
                    We're excited to meet passionate and talented people who want to make a real impact. Whether you're looking to jumpstart your career with an internship
                    or you're ready for a full-time role to elevate your professional journey, we offer a vibrant and supportive environment where you can truly shine.
                    Join us and be part of a team that values your growth and creativity.
                </p>
            </div>
            <div className=" my-4 px-4 rounded-lg shadow-lg flex w-full max-w-4xl">
                <div className=" hidden w-1/2 p-8 bg-blue-900 text-white md:flex flex-col justify-center items-center rounded-l-md">
                    <h2 className="text-2xl font-bold mb-4">Jumpstart Your Career</h2>
                    <p className="mb-4">with Our Internship Program & Job Programs</p>
                    <p className="text-3xl">Apply Now</p>
                    <div>
                        <Lottie animationData={carrerAnim} className=""></Lottie>
                    </div>
                </div>
                <div className="md:w-1/2 p-8  bg-indigo-600 sm:bg-white rounded-r-md">
                    <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Role  <span className="text-red-700">*</span>
                                <select name="role" value={formData.role} onChange={handleFormData} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value=""></option>
                                    <option value="Job">Job</option>
                                    <option value="Intern">Intern</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Domain  <span className="text-red-700">*</span>
                                <select name="domain" value={formData.domain} onChange={handleFormData} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value=" "></option>
                                    <option value="Machine Learning">Machine Learning</option>
                                    <option value="Frontend Development">Frontend Development</option>
                                    <option value="Backend Development">Backend Development</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700">Full Name:<span className="text-red-700">*</span> </label>
                            <input type="text" name='fullName' value={formData.fullName} onChange={handleFormData} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="ex: Johny Beck" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Your Email: <span className="text-red-700">*</span> </label>
                            <input type="email" name='email' value={formData.email} onChange={handleFormData} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="ex:youraccount@email.com" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Phone Number:<span className="text-red-700">*</span> </label>
                            <input type="tel" name='phoneNumber' value={formData.phoneNumber} onChange={handleFormData} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="+91xxxxxxxxxx" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Current Location:<span className="text-red-700">*</span> </label>
                            <input type="text" name='location' value={formData.location} onChange={handleFormData} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="H.No/Appartment No. Area " required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Uplaod Resume: <span className="text-red-700">* .doc,.docx,.pdf</span> </label>
                            <input type="file" accept=".doc,.docx,.pdf" onChange={handleFileChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">LinkedIn Profile </label>
                            <input type="url" name='linkedin' value={formData.linkedin} onChange={handleFormData} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" placeholder="https://www.linkedin.com/in/your-account/" />
                        </div>
                        <div>
                            <label className="block text-gray-700">GitHub Profile</label>
                            <input type="url" name='github' value={formData.github} onChange={handleFormData} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" placeholder="https://github.com/your-account" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Cover Letter</label>
                            <textarea name="message" value={formData.message} onChange={handleFormData} className=" resize-none w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                            </textarea>
                            {/* <input type="" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="H.No/Appartment No. Area " /> */}
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="terms" required onChange={handleCheckboxChange} checked={isChecked} />
                            <label className="text-gray-700" htmlFor="terms">By signing up, you agree to the <a href="#" className="text-indigo-600">Term of Service </a><span className="text-red-700">*</span></label>
                        </div>
                        <button
                            type="submit"
                            onClick={sendMail}
                            className={`w-full ${ isLoading?"bg-indigo-400": "bg-indigo-600"} text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:bg-indigo-700 flex items-center justify-center ${!isChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            ) : (
                                "Register"
                            )}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Careers;