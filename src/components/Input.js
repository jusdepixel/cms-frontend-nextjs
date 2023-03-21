const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} shadow-sm block mt-1 w-full`}
        {...props}
    />
)

export default Input
