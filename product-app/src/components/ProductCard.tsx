type ProductCardProps = {
    name: string;
    image: string;
    price: number;
    Isadded: boolean;
    EventOnClick: () => void;
  };
  
  export function ProductCard({ name, image, price, Isadded, EventOnClick }: ProductCardProps) {
    return (
      <div
        style={{border: "1px solid black",borderRadius: "5px",width: "200px",padding: "10px",textAlign: "center",margin: "20px"}}>
        <img src={image} alt={name} style={{width: "100%", height: "120px", borderRadius: "6px"}}/>
        <h3>{name}</h3>
        <p>Rp {price}</p>
  
        <button
          onClick={EventOnClick}
          style={{backgroundColor: Isadded ? "green" : "blue", color: "white" , borderRadius: "4px", cursor: "pointer",}}>
          {Isadded ? "Added" : "Add to Cart"}
        </button>
      </div>
    );
  }
  