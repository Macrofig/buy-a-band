export const TextInput = ({type = 'text', value, onChange, ...rest}) => (
    <input 
        type={type}
        className="w-full p-1 text-xl font-thin border border-slate-400"
        onChange={({target: {value}}) => onChange(value)}
        value={value}
        {...rest}
        />
    )