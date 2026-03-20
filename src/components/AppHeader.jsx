import { Link } from "react-router-dom";

/* navbar */
const menu = [
    {
        id: 1,
        path: '/',
        text: 'Home'
    },
    {
        id: 2,
        path: '/ChiSiamo',
        text: 'Chi Siamo'
    },
    {
        id: 3,
        path: '/Prodotti',
        text: 'Prodotti'
    },
]

export default function AppHeader() {

    return (
        <header>

            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid justify-content-center">
                    <ul className="navbar-nav flex-row gap-3">

                        {
                        menu.map(item =>
                            <li className="nav-item" key={item.id}>
                                <Link className="nav-link" to={item.path}>
                                    {item.text}
                                </Link>
                            </li>
                        )
                        }

                    </ul>
                </div>
            </nav>

        </header>
    )
}