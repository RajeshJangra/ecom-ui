import fetch from "isomorphic-fetch";

export class CategoryService {
    getCategories(){
        return fetch('http://localhost:8181/category', {
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();

            });
    }
}