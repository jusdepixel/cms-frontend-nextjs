const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div>{logo}</div>

        <div className="w-full sm:max-w-md mt-6 p-6 shadow-md overflow-hidden block-bg">
            {children}
        </div>
    </div>
)

export default AuthCard
