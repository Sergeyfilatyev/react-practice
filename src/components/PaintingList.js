import Painting from './Painting';
export default function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            url={item.url}
            title={item.title}
            price={item.price}
            authorTag={item.author.tag}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}
