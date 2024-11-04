

function CommonInput(){
    return <input
    type={type || 'text'}
    placeholder={placeholder || 'Enter Value here' }
    value={value}
    onChange={onChange}
    className={className || 'w-full block' }
    />
}

export default CommonInput;