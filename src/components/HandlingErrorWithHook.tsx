import { useLocalStorage } from '../hooks/useLocalStorage';

const HandlingErrorWithHook = () => {
    // Similar to useState but first arg is key to the value in local storage.
    const [name, setName, localStorageError] = useLocalStorage<string>(
        'name',
        'Bob'
    );

    const handleNameInput: React.ChangeEventHandler<HTMLInputElement> = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        setName(e.currentTarget.value);
    };

    return (
        <div>
            <h4 style={{ color: 'red' }}>{localStorageError}</h4>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => handleNameInput(e)}
            />
        </div>
    );
};

export default HandlingErrorWithHook;
