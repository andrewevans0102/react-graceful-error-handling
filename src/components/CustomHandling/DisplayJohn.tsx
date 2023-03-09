const DisplayJohn = ({ username }: any) => {
    if (username === 'John') {
        throw new Error('you typed the name John');
    }
    return <p>{`Hi ${username}`}</p>;
};

export default DisplayJohn;
