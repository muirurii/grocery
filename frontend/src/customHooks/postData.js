const postData = async(url, details, auth) => {
    try {
        const res = await fetch(`http://localhost:5000/api${url}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accepts': 'application/json',
                Authorization: `Bearer ${auth}`
            },
            body: JSON.stringify(details)
        });
        const data = await res.json();
        return { error: res.status !== 200 ? true : null, data };

    } catch (error) {
        return { error: error }
    }
}

export default postData;