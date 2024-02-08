import React, { forwardRef } from "react";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  const inputClasses =
    "w-full p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  const labelClasses = "text-sm font-bold uppercase text-stone-500";

  return (
    <div className="flex flex-col gap-2 my-4">
      <label htmlFor="text" className={labelClasses}>
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={inputClasses} id="text" {...props} />
      ) : (
        <input ref={ref} className={inputClasses} {...props} />
      )}
    </div>
  );
});

export default Input;
