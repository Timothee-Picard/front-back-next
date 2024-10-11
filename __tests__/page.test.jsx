import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
import {ToastProvider} from "../context/ToastContext";

describe('Page', () => {
    it('renders a heading', () => {
        render(
            <ToastProvider>
                <Page />
            </ToastProvider>)

        const heading = screen.getByText(/First Name/i)

        expect(heading).toBeInTheDocument()
    })
})