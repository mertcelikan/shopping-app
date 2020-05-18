class Product {
  constructor(id, ownerId, title, imageUrl, description, price, category) {
    this.id = id;
    this.ownerId = ownerId;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}

export default Product;
