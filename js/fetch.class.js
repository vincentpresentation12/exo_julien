/* 
Create JS classe
*/

class FetchRequest {
    // Classe constructor: used to inject value in the classe
    constructor( url, dataType, method = 'GET', data = null ){
        // Classe property
        this.url = url;
        this.dataType = dataType;
        this.method = method;
        this.data = data;

        this.header = undefined;
    }

    /* 
    Method to set request HEADER
    */
        init = function(){
            // Used to set request HEADER: check method
            if( this.method === 'POST' ){
                // CRUD: Create information within the API
                this.header = {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify(this.data)
                };
            }
            else if( this.method === 'GET' ){
                // CRUD: Read information from the API
                this.header = {
                    method: 'GET',
                };
            }
            else if( this.method === 'PUT' ){
                // CRUD: Update information within the API
                this.header = {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify(this.data)
                };
            }
            else if( this.method === 'DELETE' ){
                // CRUD: Delete information within the API
                this.header = {
                    method: 'DELETE',
                };
            }
        }
    //

    /* 
    Method to send request
    */
        sendRequest = function(){
            // Retun new Promise
            return new Promise( (resolve, reject) => {
                
                // Use Fetch navigator API 
                // => https://developer.mozilla.org/fr/docs/Web/API/Fetch_API
                fetch( this.url, this.header )
                .then( response => {
                    // The first THEN is used to check the Fetch Response
                    if(response.ok){
                        // Check dataType
                        if( this.dataType === 'json' ){
                            // Convert response in JSON
                            return response.json();
                        }
                        else if( this.dataType === 'text' ){
                            // Convert response in text
                            return response.text();
                        }
                    }
                    else{ 
                        // Response is not OK
                        return reject(response);
                    }
                })
                .then( fetchResponse => { // Get the RESOLVE response of .json() Promise
                    // Resolve sendRequest method
                    return resolve(fetchResponse);
                })
                .catch( fetchError => {
                    // Fecth server do not exist
                    return reject(fetchError);
                })
            })
        }
    //
}
