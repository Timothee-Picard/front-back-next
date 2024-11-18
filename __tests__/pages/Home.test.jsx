import { render, screen, fireEvent } from '@testing-library/react'
import Page from '@/app/page'
import { ToastProvider } from '../../context/ToastContext'

describe('Page', () => {
    it('should render the form', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>
        )

        const form = screen.getByTestId('form')
        expect(form).toBeInTheDocument()
    })

    it('should render the input fields', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>
        )

        const firstName = screen.getByTestId('first_name')
        const lastName = screen.getByTestId('last_name')
        const email = screen.getByTestId('email')
        const city = screen.getByTestId('city')
        const zip_code = screen.getByTestId('zip_code')

        expect(firstName).toBeInTheDocument()
        expect(lastName).toBeInTheDocument()
        expect(email).toBeInTheDocument()
        expect(city).toBeInTheDocument()
        expect(zip_code).toBeInTheDocument()
    })

    it('should render the submit button', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>
        )

        const submit = screen.getByTestId('submit_button')
        expect(submit).toBeInTheDocument()
    })

    it('should set the value of the input fields', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>
        )

        const firstName = screen.getByTestId('first_name')
        const lastName = screen.getByTestId('last_name')
        const email = screen.getByTestId('email')
        const birthday = screen.getByTestId('birthday')
        const city = screen.getByTestId('city')
        const zip_code = screen.getByTestId('zip_code')

        firstName.value = 'John'
        lastName.value = 'Doe'
        email.value = 'john.doe@example.com'
        birthday.value = '1990-01-01'
        city.value = 'Montpellier'
        zip_code.value = '34000'

        const submit = screen.getByTestId('submit_button')
        fireEvent.click(submit)
    })

    it('should show error for empty first name', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>
        )

        const submitButton = screen.getByTestId('submit_button')

        fireEvent.click(submitButton)

        const firstNameError = screen.getByTestId('first_name_error')
        expect(firstNameError).toBeInTheDocument()
    })

    it('should show error for invalid email', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>
        )

        const submitButton = screen.getByTestId('submit_button')

        fireEvent.click(submitButton)

        const emailError = screen.getByTestId('email_error')
        expect(emailError).toBeInTheDocument()
    })

    it('should show error for empty birthday', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>
        )

        const submitButton = screen.getByTestId('submit_button')

        fireEvent.click(submitButton)

        const birthdayError = screen.getByTestId('birthday_error')
        expect(birthdayError).toBeInTheDocument()
    })

    it('should show error for invalid zip code', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>
        )

        const zipCodeInput = screen.getByTestId('zip_code')
        const submitButton = screen.getByTestId('submit_button')

        fireEvent.change(zipCodeInput, { target: { value: 'abcde' } })
        fireEvent.click(submitButton)

        const zipCodeError = screen.getByTestId('zip_code_error')
        expect(zipCodeError).toBeInTheDocument()
    })

    it('should clear error after valid input', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>
        )

        const firstNameInput = screen.getByTestId('first_name')
        const submitButton = screen.getByTestId('submit_button')

        fireEvent.click(submitButton)

        const firstNameError = screen.getByTestId('first_name_error')
        expect(firstNameError).toBeInTheDocument()

        fireEvent.change(firstNameInput, { target: { value: 'John' } })
        fireEvent.click(submitButton)

        expect(screen.queryByTestId('first_name_error')).toBeNull()
    })
})