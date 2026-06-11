import css from "./hero.module.css";
interface ProductProps {
  name: string;
  lastName: string;
  age: number;
}

export default function Product1({ name, lastName, age }: ProductProps) {
  return (
    <div>
      <h2 className={css.title}>{name}</h2>
      <p>{lastName}</p>
      <p>{age}</p>
    </div>
  );
}
