const Button = ({label, iconURL, bgColor, borderColor, txtColor, fullWidth}) => {
  return (
    <button
    className={`flex justify-center items-center gap-2 px-7 py-4 border 
    font-montserrat text-lg leading-none rounded-full ${bgColor}
    ${txtColor} ${borderColor} ${fullWidth && "w-full"}`}
    >
        {label}
        {
          iconURL ? <img src={iconURL} alt="iconUrl" className="ml-2 rounded-full w-5 h-5"/>:null
        }
    </button>
  )
}

export default Button