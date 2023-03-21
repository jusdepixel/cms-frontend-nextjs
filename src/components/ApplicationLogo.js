const ApplicationLogo = props => (
    <span
        className={`logo ${
            props.className !== undefined ? props.className : 'default'
        }`}>
        Logo
    </span>
)

export default ApplicationLogo
