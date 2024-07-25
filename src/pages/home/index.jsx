import Header from "../../components/header";
import ButtonTheme from "../../components/button-theme-toggler"
import List  from "../../components/pokemon-list";

const Home = () => {
    return (
        <>
            <Header>
                <ButtonTheme />
            </Header>
            <List />
        </>
    )
}

export { Home }
