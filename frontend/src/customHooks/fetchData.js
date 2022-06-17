const fetchData = async(url) => {
    try {
        const res = await fetch(`http://localhost:5000/api${url}`);
        const data = await res.json();
        return { error: null, data };
    } catch (error) {
        return { error: error }
    }
}

export default fetchData;