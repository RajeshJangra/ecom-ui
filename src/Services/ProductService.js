export class ProductService {
    getProducts(){
        return [
            {id: "1", Name: "Product 1", Description: "Derscasdfption 1", Price : 65, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjO4vMxSkwHP4N9i-3FPsbBrJ4oBzYI97LMAHsebHAY_Q_WEL", AvailableQuantity: 50, Category: "Category1" },
            {id: "2", Name: "Product 2", Description: "Derscasdfption 2", Price : 75, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjO4vMxSkwHP4N9i-3FPsbBrJ4oBzYI97LMAHsebHAY_Q_WEL", AvailableQuantity: 60, Category: "Category2" },
            {id: "3", Name: "Product 3", Description: "Derscasdfption 3", Price : 85, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjO4vMxSkwHP4N9i-3FPsbBrJ4oBzYI97LMAHsebHAY_Q_WEL", AvailableQuantity: 70, Category: "Category3" },
            {id: "4", Name: "Product 4", Description: "Derscasdfption 4", Price : 95, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjO4vMxSkwHP4N9i-3FPsbBrJ4oBzYI97LMAHsebHAY_Q_WEL", AvailableQuantity: 80, Category: "Category4" }
        ];
    }
}