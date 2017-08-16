export class ProductService {
    getProducts(){
        fetch('./products.json')  
        .then(function(response) {
            return response.json()
        })
        return ;
    }
}