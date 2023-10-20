

const Tracking_parcel = async (request, response) => {

    const { tracking_number } = request.query;

    if (!tracking_number) {
        return response.status(403).send({ "message" : "Tracking number is required"});
    }

    fetch(process.env.TRACKING_API_URL + new URLSearchParams({ tracking_number : tracking_number }),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + process.env.TRACKING_API_KEY,  // Innecesary, 3rd party API does not require it.
            }
        })
        .then(res => res.json())
        .then(json => {

            if (json?.code && json?.message) {
                return response.status(json.code).send({ "message" : json.message});
            }

            return response.status(200).send(json);

        })
        .catch(err => {
            return response.status(500).send(err);
        });


}

export { Tracking_parcel };