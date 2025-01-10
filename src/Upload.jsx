import React, {useState} from "react";

function UploadFile() {

    const [url, setUrl] = useState('')
    const [responseData, setResponseData] = useState(null);
    const apiKey = "38821051-8019-4fb5-bc2f-02d1f68c9fed";

    const handleSubmit = (event) => {
        event.preventDefault();

        const encodeUrl = encodeURIComponent(url);
        console.log('Encoded URL:', encodeUrl);

        const data = `Url=${encodeUrl}`;

        fetch('https://api.cloudmersive.com/virus/scan/website', {
            method: "POST",
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                "Apikey": "38821051-8019-4fb5-bc2f-02d1f68c9fed"
            },
            body: data
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Response data:", data)
            setResponseData(data);
        })
        .catch(error => {
            console.error("There was an error!", error);
        });
            
    };






    return(
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>Enter URL </label>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}></input>
            <input type="submit" value="Submit" class="button"/>

        </form>

        <div className="response-container">
            <h3>Response:</h3>
            {responseData? (
                <div>
                <p><strong>Result:</strong> {responseData.CleanResult ? "Safe" : "Untrustworthy!"}</p>
                <p><strong>Website Threat Type:</strong> {responseData.WebsiteThreatType}</p>


                <h3>Found Viruses:</h3>
                {Array.isArray(responseData.FoundViruses) && responseData.FoundViruses.length > 0 ? (
                    <ul>
                    {responseData.FoundViruses.map((virus, index) =>(
                        <li key={index}>
                            <strong>File:</strong> {virus.FileName} <br />
                            <strong>Virus:</strong> {virus.VirusName} <br />
                        </li>
                    ))}
                </ul>
            ) : (
                <p> No Malware found.</p>
            
                

            )}

            <p><strong>HTTP Response Code:</strong> {responseData.WebsiteHttpResponseCode}</p>

        </div>
    ) : (
        <p>No response data available...</p>
    )}

    </div>
    
    
</div>

);

}




export default UploadFile;