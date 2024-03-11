import './Product.css';

export function Product({title, decription, price}) {
  return (
    <div className="product">
      <div className = "img-wrapper">Photo</div>

      <div className = "title">{title}</div>

      <div className = "description">{decription}</div>
      
      <div className = "buy-wrapper">
        <button className = "buyBtn">Buy</button>
        
        <div className = "price">{price}</div>
      </div>
    </div>
  );
}
