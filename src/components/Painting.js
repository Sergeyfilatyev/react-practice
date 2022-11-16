import defaultImage from './default.jpg';
export default function Painting(props) {
  const { url = defaultImage, title, price, authorTag, quantity } = props;

  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>Author {authorTag}</p>
      <p>Цена {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
    </div>
  );
}
