import { useId } from "react";
import PropTypes from "prop-types";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  // eslint-disable-next-line react/prop-types
  currencyOPtions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          id={id}
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          autoFocus
          onChange={(event) =>
            onAmountChange && onAmountChange(Number(event.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(event) =>
            onCurrencyChange && onCurrencyChange(event.target.value)
          }
          disabled={currencyDisabled}
        >
          {currencyOPtions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.array,
  selectedCurrency: PropTypes.string,
  amountDisabled: PropTypes.bool,
  currencyDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default InputBox;
