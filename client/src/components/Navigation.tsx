import Link from "next/link";

export default function Naviation() {
    return (
        <nav className={"navbar navbar-expand-lg navbar-light bg-light border-bottom"}>
            <div className={"container-fluid"}>
                <Link href={"/"} className={"navbar-brand"}>FastAPI + NextJS Board</Link>

                <button
                    className={"navbar-toggler"}
                    type={"button"}
                    data-bs-toggle={"collapse"}
                    data-bs-target={"#navbarSupportedContent"}
                    aria-controls={"navbarSupportedContent"}
                    aria-expanded={"false"}
                    aria-label={"Toggle navigation"}
                ><span className={"navbar-toggler-icon"}></span></button>
                <div className={"collapse navbar-collapse"} id={"navbarSupportedContent"}>
                    <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                        <li className={"nav-item"}>
                            <a href={"/"} className={"nav-link"}>회원가입</a>
                        </li>
                        <li className={"nav-item"}>
                            <a href={"/"} className={"nav-link"}>로그인</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
