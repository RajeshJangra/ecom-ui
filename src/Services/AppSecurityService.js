import fetch from "isomorphic-fetch";

export class AppSecurityService {
    login(username, password){
        let userObject = { "username": username, "password": password };
        return fetch('http://localhost:8181/login', {
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObject)
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