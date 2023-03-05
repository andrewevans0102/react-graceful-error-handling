import React from 'react';
import './App.css';
import FormValidation from './components/FormValidation';
import HandlingErrorWithHook from './components/HandlingErrorWithHook';
import HandleErrorsWithReactErrorBoundary from './components/HandleErrorsWithReactErrorBoundary';

function App() {
    return (
        <main>
            <h1>Graceful Error Handling in React</h1>
            <section style={{ border: 'solid 1px', padding: '20px' }}>
                <h2>Form Field</h2>
                <FormValidation />
            </section>
            <section style={{ border: 'solid 1px', padding: '20px' }}>
                <h2>Handling Error with Hook</h2>
                <HandlingErrorWithHook />
            </section>
            <section style={{ border: 'solid 1px', padding: '20px' }}>
                <h2>Handling Error with React Error Boundry</h2>
                <HandleErrorsWithReactErrorBoundary />
            </section>
        </main>
    );
}

export default App;
