"use client"

import React, {useState} from "react"
import {
    validateBirthday,
    validateCity,
    validateEmail,
    validateFirstName,
    validateLastName,
    validateZipCode
} from "@/utils/validators";
import {useToast} from "@/context/ToastContext";

export default function Home() {
    const { addToast } = useToast()

    const [firstNameError, setFirstNameError] = useState<string | null>(null)
    const [lastNameError, setLastNameError] = useState<string | null>(null)
    const [emailError, setEmailError] = useState<string | null>(null)
    const [birthdayError, setBirthdayError] = useState<string | null>(null)
    const [cityError, setCityError] = useState<string | null>(null)
    const [zipCodeError, setZipCodeError] = useState<string | null>(null)

    /**
     * Handle form submission
     * @param event
     * @returns void
     */
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData.entries())
        let userToAdd = {}
        let isValid = true

        try {
            validateFirstName(data.first_name as string);
            setFirstNameError(null);
        } catch (error) {
            if (!(error instanceof Error)) return;
            setFirstNameError(error.message);
            isValid = false;
        }

        try {
            validateLastName(data.last_name as string);
            setLastNameError(null);
        } catch (error) {
            if (!(error instanceof Error)) return;
            setLastNameError(error.message);
            isValid = false;
        }

        try {
            validateEmail(data.email as string);
            setEmailError(null);
        } catch (error) {
            if (!(error instanceof Error)) return;
            setEmailError(error.message);
            isValid = false;
        }

        try {
            validateBirthday(data.birthday as string);
            setBirthdayError(null);
        } catch (error) {
            if (!(error instanceof Error)) return;
            setBirthdayError(error.message);
            isValid = false;
        }

        try {
            validateCity(data.city as string);
            setCityError(null);
        } catch (error) {
            if (!(error instanceof Error)) return;
            setCityError(error.message);
            isValid = false;
        }

        try {
            validateZipCode(data.zip_code as string);
            setZipCodeError(null);
        } catch (error) {
            if (!(error instanceof Error)) return;
            setZipCodeError(error.message);
            isValid = false;
        }

        if (!isValid) {
            addToast('Please fix the errors in the form.', 'error');
            return;
        }

        userToAdd = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            birthday: data.birthday,
            city: data.city,
            zip_code: data.zip_code,
        };

        addToast('User added successfully', 'success')
        console.log(userToAdd)
    }

    return (<>
        <h1 className="text-3xl font-bold text-[#07074D] text-center mt-8">Add User</h1>
        <form className="w-full max-w-lg mx-auto flex flex-col gap-4" onSubmit={handleSubmit} data-testid="form">
            <div>
                <label className="font-medium text-[#07074D]" htmlFor="first_name">First Name</label>
                <input
                    type="text"
                    name="first_name"
                    data-testid="first_name"
                    id="first_name"
                    placeholder="Enter your first name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {firstNameError && <p className="text-red-500 text-sm" data-testid="first_name_error">{firstNameError}</p>}
            </div>
            <div>
                <label className="font-medium text-[#07074D]" htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    name="last_name"
                    data-testid="last_name"
                    id="last_name"
                    placeholder="Enter your last name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {lastNameError && <p className="text-red-500 text-sm" data-testid="last_name_error">{lastNameError}</p>}
            </div>
            <div>
                <label className="font-medium text-[#07074D]" htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    data-testid="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {emailError && <p className="text-red-500 text-sm" data-testid="email_error">{emailError}</p>}
            </div>
            <div>
                <label className="font-medium text-[#07074D]" htmlFor="birthday">Birthday</label>
                <input
                    type="date"
                    name="birthday"
                    data-testid="birthday"
                    id="birthday"
                    placeholder="Enter your birthday"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {birthdayError && <p className="text-red-500 text-sm" data-testid="birthday_error">{birthdayError}</p>}
            </div>
            <div>
                <label className="font-medium text-[#07074D]" htmlFor="city">City</label>
                <input
                    type="text"
                    name="city"
                    data-testid="city"
                    id="city"
                    placeholder="Enter your city"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {cityError && <p className="text-red-500 text-sm" data-testid="city_error">{cityError}</p>}
            </div>
            <div>
                <label className="font-medium text-[#07074D]" htmlFor="zip_code">Zip Code</label>
                <input
                    type="text"
                    name="zip_code"
                    data-testid="zip_code"
                    id="zip_code"
                    placeholder="Enter your zip code"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {zipCodeError && <p className="text-red-500 text-sm" data-testid="zip_code_error">{zipCodeError}</p>}
            </div>
            <div>
                <button type="submit"
                        data-testid="submit_button"
                        className="w-full bg-[#6A64F1] text-white py-3 px-6 text-base font-medium rounded-md hover:bg-[#6A64F1] hover:shadow-md">
                    Submit
                </button>
            </div>
        </form>
    </>)
}
