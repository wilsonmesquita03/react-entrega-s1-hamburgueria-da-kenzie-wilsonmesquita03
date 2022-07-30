import InputSearch from "../InputSearch"
import Logo from "../Logo"

import { HeaderContainer } from "./styles"

const Header = ({filterBy, setMessage}) => {
    return (
        <HeaderContainer>
            <div>
                <Logo />
                <InputSearch filterBy={filterBy} setMessage={setMessage}/>
            </div>
        </HeaderContainer>
    )
}

export default Header