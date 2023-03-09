import { useRef, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// originally copied from https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react
function ErrorFallback({ error, resetErrorBoundary }: any) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: 'red' }}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

const Bomb = ({ username }: any) => {
    if (username === 'bomb') {
        throw new Error('💥 CABOOM 💥');
    }
    return <p>{`Hi ${username}`}</p>;
};

const ReactErrorBoundary = () => {
    const [username, setUsername] = useState('');
    const usernameRef = useRef(null);

    return (
        <div>
            <label>
                {`Username (don't type "bomb"): `}
                <input
                    placeholder={`type "bomb"`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    ref={usernameRef}
                />
            </label>
            <div>
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {
                        setUsername('');
                    }}
                    resetKeys={[username]}
                >
                    <Bomb username={username} />
                </ErrorBoundary>
            </div>
        </div>
    );
};

export default ReactErrorBoundary;
