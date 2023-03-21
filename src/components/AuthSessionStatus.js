const AuthSessionStatus = ({ status, className, ...props }) => (
    <>
        {status && (
            <div className={`${className} font-medium text-sm`} {...props}>
                {status}
            </div>
        )}
    </>
)

export default AuthSessionStatus
