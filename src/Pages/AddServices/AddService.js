import React from 'react';
import axios from 'axios';
import useChangeTitle from '../../hooks/changeTitle';
const AddService = () => {
    useChangeTitle('Add Service')
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const data = {
            title: form.name.value, description: form.details.value, picture: form.photoURL.value, price: form.price.value
        }
        axios.post(`https://rakibs-photography-server.vercel.app/service`, data).then(res => console.log(res))
        form.reset()
    }
    return (
        <div>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-6">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                    Account settings
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="username"
                            >
                                Service Name
                            </label>
                            <input
                                name='name'
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="emailAddress"
                            >
                                Service Description
                            </label>
                            <input
                                name='details'
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="password"
                            >
                                Service image
                            </label>
                            <input
                                name='photoURL'
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="passwordConfirmation"
                            >
                                Service Charge
                            </label>
                            <input
                                name='price'
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddService;