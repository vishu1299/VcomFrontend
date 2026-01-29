'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Profile update:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

      <div className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
