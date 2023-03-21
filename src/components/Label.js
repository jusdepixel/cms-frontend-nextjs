const Label = ({ className, children, ...props }) => (
    <label className={`${className} block font-medium text-sm`} {...props}>
        {children}
    </label>
)

export default Label
