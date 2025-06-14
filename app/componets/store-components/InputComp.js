const InputComp = ({ label, value, onChange, type = "text",iscurrency }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium">{label}</label>
      <div className="relative">
        <input
        type={type}
        value={value}
        onChange={onChange}  // ✅ pass the whole event object
        className="border border-gray-800 p-2 w-full"
      />
      {iscurrency && (
        <p className="text-xl absolute right-3 -top-[20%] translate-y-[50%]">₹</p>
      )}
      </div>
    </div>
  )
}

export default InputComp
