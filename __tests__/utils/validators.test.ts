import {
	validateBirthday,
	validateCity,
	validateEmail,
	validateFirstName,
	validateLastName,
	validateZipCode
} from '@/utils/validators'

describe('validateBirthDate', () => {
	it('should return true if the birth date is valid', () => {
		expect(validateBirthday('1990-01-01')).toBe('1990-01-01')
	})

	it('should return an error if no argument is sent', () => {
		expect(() => validateBirthday('')).toThrow('No argument sent')
	})

	it('should return an error if the birth date is in the future', () => {
		const futureDate = new Date()
		futureDate.setFullYear(futureDate.getFullYear() + 1)
		expect(() => validateBirthday(futureDate.toISOString())).toThrow('Birth date is in the future')
	})

	it('should return an error if the birth date is not a date object', () => {
		expect(() => validateBirthday('aaa')).toThrow('Birth is not a Date object')
	})

	it('should return an error if the person is under 18 years old', () => {
		const date = new Date()
		date.setFullYear(date.getFullYear() - 17)
		expect(() => validateBirthday(date.toISOString())).toThrow('You must be at least 18 years old')
	})
})

describe('validateZipCode', () => {
	it('should return true if the zip code is valid', () => {
		expect(validateZipCode('12345')).toBe('12345')
	})

	it('should return an error if the zip code is not 5 characters long', () => {
		expect(() => validateZipCode('1234')).toThrow('Zip code must be 5 characters long')
	})

	it('should return an error if the zip code contains a decimal point', () => {
		expect(() => validateZipCode('1000.234')).toThrow('Zip code cannot contain a decimal point')
	})
})

describe('validateEmail', () => {
	it('should return true if the email is valid', () => {
		expect(validateEmail('test@test.fr')).toBe('test@test.fr')
	})

	it('should return an error if the email is invalid', () => {
		expect(() => validateEmail('test.fr')).toThrow('Invalid email address')
	})
})

describe('validateFirstName', () => {
	it('should return true if the first name is valid', () => {
		expect(validateFirstName('John')).toBe('John')
	})

	it('should return an error if the first name is empty', () => {
		expect(() => validateFirstName('')).toThrow('First name is required')
	})

	it('should return an error if the first name is less than 2 characters long', () => {
		expect(() => validateFirstName('J')).toThrow('First name must be at least 2 characters long')
	})

	it('should return an error if the first name is greater than 50 characters long', () => {
		expect(() => validateFirstName('J'.repeat(51))).toThrow('First name must be at most 50 characters long')
	})
})

describe('validateLastName', () => {
	it('should return true if the last name is valid', () => {
		expect(validateLastName('Doe')).toBe('Doe')
	})

	it('should return an error if the last name is empty', () => {
		expect(() => validateLastName('')).toThrow('Last name is required')
	})

	it('should return an error if the last name is less than 2 characters long', () => {
		expect(() => validateLastName('D')).toThrow('Last name must be at least 2 characters long')
	})

	it('should return an error if the last name is greater than 50 characters long', () => {
		expect(() => validateLastName('D'.repeat(51))).toThrow('Last name must be at most 50 characters long')
	})
})

describe('validateCity', () => {
	it('should return true if the city is valid', () => {
		expect(validateCity('Paris')).toBe('Paris')
	})

	it('should return an error if the city is empty', () => {
		expect(() => validateCity('')).toThrow('City is required')
	})

	it('should return an error if the city is less than 2 characters long', () => {
		expect(() => validateCity('P')).toThrow('City must be at least 2 characters long')
	})

	it('should return an error if the city is greater than 50 characters long', () => {
		expect(() => validateCity('P'.repeat(51))).toThrow('City must be at most 50 characters long')
	})
})