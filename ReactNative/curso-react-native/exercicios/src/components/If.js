export default ({ teste, children }) => {
    if (teste) {
        return children;
    } else {
        return false;
    }
};
