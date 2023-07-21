import { iceCreamData } from "./iceCreamData";

export default function App() {
  return (
    <div className="container-fluid p-5">
      <Header />
      <Menu />
    </div>
  );
}

function Header() {
  return (
    <div className="d-flex justify-content-between bg--gradient my-3 p-3 header">
      <Logo />
      <Cart />
    </div>
  );
}

function Logo() {
  return (
    <figure className="logo--img">
      <img src="../img/Logo.png" alt="Logo" />
    </figure>
  );
}

function Cart() {
  return (
    <div className="d-flex">
      <div className="m-auto px-3">
        <p>X ice cream</p>
        <p>total X</p>
      </div>
      <button className="p-3 cart--icon border-0 bg-transparent">🛒</button>
    </div>
  );
}

function Menu() {
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {iceCreamData.map((ice) => (
        <IceCream ice={ice} key={ice.flavor} />
      ))}
    </div>
  );
}

function IceCream({ ice }) {
  return (
    <div>
      <div className="card ice-cream--card">
        <img className="card-img-top p-2" src={ice.img} alt={ice.flavor} />
        <div className="card-body">
          <h1 className="color--pink">{ice.flavor}</h1>
          <p>{ice.description}</p>
          <div className="d-flex mb-4">
            <button className="btn">+</button>
            <span className="m-3">X</span>
            <button className="btn">-</button>
            <span className="m-3">
              {ice.unit} / € {ice.price}
            </span>
          </div>
          <button className="btn bg--gradient border-0">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
