//import shortid from 'shortid';

export default function Listing({items}) {
  //const itemsIndexes = items.map(item => ({id: shortid.generate(), value: item}));

  return (
    <div className="item-list">
      {items.map(item => <Card item={item} key={item.listing_id} />)}
    </div>
  );
}

function Card({item}) {
  if (item.state === 'removed') return null;
  return (
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title}</p>
          <p className="item-price">{getCurrency(item.code, item.price)}</p>
          <p className={"item-quantity " + getQuantityClass(item.quantity)}>{item.quantity} left</p>
        </div>
      </div>
  );
}

function getCurrency(code, price) {
  if (code === "USD") return `$${price}`;
  if (code === "EUR") return `€${price}`;
  return `${price} GBP`;
}

function getQuantityClass(quantity) {
  if (quantity <= 10) return "level-low";
  if (quantity <= 20) return "level-medium";
  return "level-high";
}
