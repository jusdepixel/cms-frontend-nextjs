const ApplicationLogo = props => (
    <span
        className={`logo ${
            props.className !== undefined ? props.className : 'default'
        }`}>
        CMS Frontend next.js
    </span>
)

export default ApplicationLogo
