const validNamePattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ\-'\s]+$/;
const validZipCodePattern = /^\d{5}$/;
const validEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validate a zip code
 * @param zipCode The zip code to validate
 * @returns zipCode
 * @throws {Error} If the zip code is invalid
 */
export function validateZipCode(zipCode: string): string {
	zipCode = zipCode.trim();
	if (zipCode.includes(".")) throw new Error("Zip code cannot contain a decimal point");
	if (zipCode.length !== 5) throw new Error("Zip code must be 5 characters long");
	if (!validZipCodePattern.test(zipCode)) throw new Error("Zip code must be exactly 5 digits");
	return zipCode;
}

/**
 * Validate a birthday
 * @param birthday The birthday to validate
 * @returns birthday
 * @throws {Error} If the birthday is invalid
 */
export function validateBirthday(birthday: string) {
	if (!birthday) throw new Error("No argument sent")
	if (isNaN(new Date(birthday).getTime())) throw new Error("Birth is not a Date object")
	if (new Date(birthday)> new Date()) throw new Error("Birth date is in the future")
	const date = new Date(birthday);
	const today = new Date();
	const diff = Date.now() - new Date(birthday).getTime();
	const age = Math.abs(new Date(diff).getUTCFullYear() - 1970);

	const monthDifference = today.getMonth() - date.getMonth();
	if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < date.getDate())) {
		return age - 1;
	}
	if (age < 18) throw new Error("You must be at least 18 years old")
	return birthday;
}

/**
 * Validate an email address
 * @param email The email address to validate
 * @returns email
 * @throws {Error} If the email address is invalid
 */
export function validateEmail(email: string) {
	if (!validEmailPattern.test(email)) throw new Error("Invalid email address")
	return email
}

/**
 * Validate First Name
 * @param first_name The first name to validate
 * @returns first_name
 * @throws {Error} If the first name is invalid
 */
export function validateFirstName(first_name: string): string {
	if (!first_name) throw new Error("First name is required");
	if (first_name.length < 2) throw new Error("First name must be at least 2 characters long");
	if (first_name.length > 50) throw new Error("First name must be at most 50 characters long");
	if (!validNamePattern.test(first_name)) throw new Error("First name contains invalid characters");
	return first_name.trim();
}


/**
 * Validate Last Name
 * @param last_name The last name to validate
 * @returns last_name
 * @throws {Error} If the last name is invalid
 */
export function validateLastName(last_name: string): string {
	if (!last_name) throw new Error("Last name is required");
	if (last_name.length < 2) throw new Error("Last name must be at least 2 characters long");
	if (last_name.length > 50) throw new Error("Last name must be at most 50 characters long");
	if (!validNamePattern.test(last_name)) throw new Error("Last name contains invalid characters");
	return last_name.trim();
}

/**
 * Validate City
 * @param city The city to validate
 * @returns city
 * @throws {Error} If the city is invalid
 */
export function validateCity(city: string) {
	if (!city) throw new Error("City is required")
	if (city.length < 2) throw new Error("City must be at least 2 characters long")
	if (city.length > 50) throw new Error("City must be at most 50 characters long")
	return city
}