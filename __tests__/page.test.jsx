import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
import {ToastProvider} from "../context/ToastContext";
import Toast from "../components/Toast";
import {act} from 'react';

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

    it('should set the value of the input fields', () => {
        render(
            <ToastProvider>
                <Page />
                <Toast />
            </ToastProvider>)

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
        act(() => {
            submit.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
    })
});