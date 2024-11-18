import { ToastProvider, useToast } from "../../context/ToastContext";
import { render } from "@testing-library/react";

const TestComponent = () => {
    useToast()
    return <div>Test</div>;
};

describe('useToast', () => {
    it('should throw an error if used outside of ToastProvider', () => {
        expect(() => render(<TestComponent />)).toThrow('useToast must be used within a ToastProvider');
    });

    it('should use the context', () => {
        render(
            <ToastProvider>
                <TestComponent />
            </ToastProvider>
        )
    });
});