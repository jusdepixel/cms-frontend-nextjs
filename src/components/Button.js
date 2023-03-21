const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} inline-flex items-center px-4 py-2 border border-transparent text-xs uppercase tracking-widest focus:outline-none disabled:opacity-25 transition ease-in-out duration-150`}
        {...props}
    />
)

export default Button
