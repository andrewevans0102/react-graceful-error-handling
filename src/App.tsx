import React from 'react';
import './App.css';
import BasicHandling from './components/CustomHandling/BasicHandling';
import SnackbarHandling from './components/CustomHandling/SnackbarHandling';
import NoHandling from './components/CustomHandling/NoHandling';
import ReactErrorBoundary from './components/ReactErrorBoundary/ReactErrorBoundary';
import HookHandling from './components/CustomHandling/HookHandling';

function App() {
    return (
        <main>
            <h1>Graceful Error Handling in React</h1>
            <section style={{ border: 'solid 1px', padding: '20px' }}>
                <h2>No Handling</h2>
                <NoHandling />
            </section>
            <section style={{ border: 'solid 1px', padding: '20px' }}>
                <h2>Basic Handling</h2>
                <BasicHandling />
            </section>
            <section style={{ border: 'solid 1px', padding: '20px' }}>
                <h2>Snackbar Handling</h2>
                <SnackbarHandling />
            </section>
            <section style={{ border: 'solid 1px', padding: '20px' }}>
                <h2>Hook Handling</h2>
                <HookHandling />
            </section>
            <section style={{ border: 'solid 1px', padding: '20px' }}>
                <h2>React Error Boundry</h2>
                <ReactErrorBoundary />
            </section>
        </main>
    );
}

export default App;
