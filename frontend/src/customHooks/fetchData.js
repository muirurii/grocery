const fetchData = async(url, auth) => {
    try {
        const res = await fetch(`http://localhost:5000/api${url}`, {
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
                Authorization: `Bearer ${auth ? auth : null}`,
            },
        });
        const data = await res.json();
        return { error: null, data };
    } catch (error) {
        return { error: error };
    }
};

export default fetchData;