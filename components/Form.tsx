import {useToast} from "@/context/ToastContext";
import React from "react";
import {
	validateBirthday,
	validateCity,
	validateEmail,
	validateFirstName,
	validateLastName,
	validateZipCode
} from "@/utils";

export default function Form() {
	const { addToast } = useToast()

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const data = Object.fromEntries(formData.entries())
		let userToAdd = {}

		try {
			validateBirthday(data.birthday as string)
			userToAdd = {
				first_name: validateFirstName(data.first_name as string),
				last_name: validateLastName(data.last_name as string),
				email: validateEmail(data.email as string),
				birthday: validateBirthday(data.birthday as string),
				city: validateCity(data.city as string),
				zip_code: validateZipCode(data.zip_code as string)
			}
		}
		catch (error) {
			return (error instanceof Error)? addToast(error.message, 'error') : addToast('An unknown error occurred', 'error')
		}

		addToast('User added successfully', 'success')
		console.log(userToAdd)
	}

	return (<>
		<form className="w-full max-w-lg mx-auto flex flex-col gap-4" onSubmit={handleSubmit}>
			<div>
				<label className="font-medium text-[#07074D]" htmlFor="first_name">First Name</label>
				<input
					type="text"
					name="first_name"
					id="first_name"
					placeholder="Enter your first name"
					className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			</div>
			<div>
				<label className="font-medium text-[#07074D]" htmlFor="last_name">Last Name</label>
				<input
					type="text"
					name="last_name"
					id="last_name"
					placeholder="Enter your last name"
					className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			</div>
			<div>
				<label className="font-medium text-[#07074D]" htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter your email"
					className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			</div>
			<div>
				<label className="font-medium text-[#07074D]" htmlFor="birthday">Birthday</label>
				<input
					type="date"
					name="birthday"
					id="birthday"
					placeholder="Enter your birthday"
					className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			</div>
			<div>
				<label className="font-medium text-[#07074D]" htmlFor="city">City</label>
				<input
					type="text"
					name="city"
					id="city"
					placeholder="Enter your city"
					className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			</div>
			<div>
				<label className="font-medium text-[#07074D]" htmlFor="zip_code">Zip Code</label>
				<input
					type="text"
					name="zip_code"
					id="zip_code"
					placeholder="Enter your zip code"
					className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			</div>
			<div>
				<button type="submit"
						className="w-full bg-[#6A64F1] text-white py-3 px-6 text-base font-medium rounded-md hover:bg-[#6A64F1] hover:shadow-md">
					Submit
				</button>
			</div>
		</form>
	</>)
}
