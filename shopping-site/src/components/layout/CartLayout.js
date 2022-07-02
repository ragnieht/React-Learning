import Billing from "../Items/Billing";
import Checkout from "../Items/Checkout";
export default function CartLayout(props) {
  return (
    <div>
      <Billing />
      <Checkout />
    </div>
  );
}
