import logoImg from '../../assets/logo.svg'

const Logo = () => {
    return (
        <img style={{cursor: "pointer"}} onClick={event => document.location.reload(true)} src={logoImg} alt="Logo" />
    )
}

export default Logo