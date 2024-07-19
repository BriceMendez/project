import Search from "../Search";
import MySpace from "../MySpace";
import Logo from "./logo-greenroots.png";

// Dans le header nous avons mis des liens vers les pages campagnes et arbres.
// Nous utilisons aussi les composants Search et MySpace.

const Header = () => {
    return (
        <>
            <header role="banner">
                <nav role="navigation" aria-label="Menu principal" className="menu_container">
                    <ul className="menu_list">
                        <li className="menu_list-item"><a href="/"><img loading="lazy" src={Logo} alt="GreenRoots (logo)"></img></a></li>
                        <li className="menu_list-item"><a href="/campagnes">Toutes les campagne</a></li>
                        <li className="menu_list-item"><a href="/arbres">Catalogue d'Arbre</a></li>
                    </ul>
                </nav>
                <div className="container-search-myspace">
                    <Search />
                    <MySpace />
                </div>
            </header>
        </>
    )
}

export default Header;