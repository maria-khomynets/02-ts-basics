import OrderForm from "./OrderForm";

export default function App() {
  const handleOrder = (data: string) => {
    console.log("Order received from:", data);
  };
  return (
    <>
      <h1>Place your order</h1>;
      <OrderForm onSubmit={handleOrder} />;
    </>
  );
}
