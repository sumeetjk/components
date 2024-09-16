/* eslint-disable react/prop-types */
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center gap-2 px-3 py-1.5 border",
    {
      "border-blue-700 bg-blue-600 text-white": primary,
      "border-gray-700 bg-gray-600 text-white": secondary,
      "border-green-700 bg-green-600 text-white": success,
      "border-yellow-600 bg-yellow-500 text-white": warning,
      "border-red-700 bg-red-600 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-400": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!success);

    if (count > 1) {
      return new Error(
        "Only one of Primary, Secondary, Success, Warning, Danger can be true!"
      );
    }
  },
};

export default Button;
