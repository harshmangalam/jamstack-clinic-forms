function InputField({ register, label, name, type = "text" }) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <label htmlFor={name}>{label}</label>
      <input type={type} {...register(name)} className="rounded-md" />
    </div>
  );
}

export default InputField;
