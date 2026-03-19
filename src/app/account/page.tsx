"use client";

import Image from "next/image";
import { useState } from "react";
import { Camera } from "lucide-react";

export default function AccountPage() {
  const [formData, setFormData] = useState({
    firstName: "david",
    lastName: "josh",
    phone: "87865453213",
    countryCode: "+1",
    email: "davidjosh32@gmail.com",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Account update:", formData);
  };

  return (
    <div className="p-6 lg:p-8">
      <style dangerouslySetInnerHTML={{ __html: `.account-page-phone-input::placeholder { color: #E7E7E7; }` }} />
      <h1 className="text-2xl font-bold text-[var(--color-black-01)] mb-1">
        Account Overview
      </h1>

      <p className="text-[14px] text-[var(--color-muted-alt-2)] mb-6">
        Here's your account summary at a glance.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Image */}

          <div className="shrink-0 flex justify-center lg:justify-start">
            <div className="relative w-28 h-28 lg:w-32 lg:h-32">
              <Image
                src="/images/profile.png"
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />

              <button
                type="button"
                className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center shadow"
              >
                <Camera className="w-3.5 h-3.5 text-[var(--color-black-01)]" />
              </button>
            </div>
          </div>

          {/* Form */}

          <div className="flex-1 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* First Name */}

              <div className="flex flex-col gap-1">
                <label className="text-[14px] font-medium text-black">
                  First Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input-design text-black placeholder:text-[#767676]"
                  placeholder="Enter first name"
                />
              </div>

              {/* Last Name */}

              <div className="flex flex-col gap-1">
                <label className="text-[14px] font-medium text-black">
                  Last Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input-design text-black placeholder:text-[#767676]"
                  placeholder="Enter last name"
                />
              </div>

              {/* Phone */}

              <div className="flex flex-col gap-1">
                <label className="text-[14px] font-medium text-black">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <div className="flex min-h-[48px] border border-[var(--color-border-input)] rounded-[var(--btn-cta-radius)] overflow-hidden bg-white">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-[20%] min-h-[48px] pl-3 pr-8 py-3 bg-gray-50 outline-none border-r border-[var(--color-border-input)] appearance-none bg-no-repeat bg-[length:14px] bg-[right_8px_center] text-black"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                  </select>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="account-page-phone-input w-[80%] min-h-[48px] px-4 py-3 outline-none text-black placeholder:text-[767676]"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              {/* Email */}
              
              <div className="flex flex-col gap-1">
                <label className="text-[14px] font-medium text-black">
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-design text-black placeholder:text-[#E7E7E7]"
                  placeholder="Enter email"
                />
              </div>
            </div>

            {/* Change Password */}

            <div>
              <label className="block text-[14px] font-medium mb-2 text-black">
                Change Password
              </label>

              <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-gray-50 border border-[var(--color-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 bg-[#E5E5E5]">
                    <Image src="/password.svg" alt="" width={20} height={20} />
                  </div>

                  <div>
                    <p className="text-[14px] font-medium text-black">Password</p>
                    <p className="text-[12px] text-gray-500">
                      Last Changed 2 months ago
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-3 py-2 text-[14px] rounded-lg hover:opacity-90 border border-[#D2D2D2] bg-white text-black"
                >
                  <Image src="/pen.svg" alt="" width={16} height={16} />
                  Change
                </button>
              </div>
            </div>

            {/* Save Button */}

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-2.5 rounded-lg text-[14px] font-medium bg-[var(--color-main-blue)] text-white hover:opacity-90"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
