// import Alert from "./Alert";
// import css from "./App.module.css";
// import Mailbox from "./footer";

// import Product from "./heder";

// import Product1 from "./hero";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />
//       <Alert />
//       <Alert type="success" />
//       <Alert type="error" />
//       <Product1 name={"Maria"} lastName={"Hom"} age={34} />
//       <Product1 name={"Taras"} lastName="Vas" age={33} />
//       <h1 className={css.title}>Hello</h1>
//       <p>React</p>
//       <Mailbox
//         username="Alisa"
//         messages={["hello"]}
//         obj={{ nam: "Hooodsaf" }}
//       />
//     </>
//   );
// }
// export default function App() {
//   const handleClick = () => {
//     console.log("Натиснули кнопку");
//   };

//   console.log("Компонент рендериться");

//   const result = handleClick();

//   console.log("result =", result);

//   return <button onClick={handleClick}>Натисни мене</button>;
// }

// src/components/App.tsx

// src/components/App.tsx

// 1. Імпортуємо функцію useState
import { useState } from "react";

export default function App() {
  // 2. Оголошуємо стан clicks
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    console.log("Клік!");
    setClicks(clicks + 1);
  };

  return <button onClick={handleClick}>Current: {clicks}</button>;
}
