import { useMoralis } from "react-moralis"

const Header = () => {
    const { user } = useMoralis()
    return (
        <div>
            <div>
                <Image />
            </div>
        </div>
    )
}

export default Header
