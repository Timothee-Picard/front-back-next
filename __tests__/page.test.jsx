import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
import {ToastProvider} from "../context/ToastContext";

describe('Page', () => {
    it('should render the form', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>)

        const form = screen.getByTestId('form')

        expect(form).toBeInTheDocument()
    })

    it('should render the input fields', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>)

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
            </ToastProvider>)

        const submit = screen.getByTestId('submit_button')

        expect(submit).toBeInTheDocument()
    })
});