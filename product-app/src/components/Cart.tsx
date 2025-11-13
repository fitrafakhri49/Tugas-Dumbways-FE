type CartProps = {
    Items: number;
  };
  
  export function Cart({ Items }: CartProps) {
    return (
      <div
        style={{
           border: "3px solid black", margin: "10px",backgroundColor: "grey",}}>
            <h3>Cart</h3> <p>Total Produk: {Items}</p>
      </div>
    );
  }
  