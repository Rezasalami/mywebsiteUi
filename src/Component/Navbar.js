import React from "react";
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav
                className={
                    (props.transparent
                        ? "top-0 absolute z-50 w-full"
                        : "relative shadow-lg bg-white shadow-lg") +
                    " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
                }
            >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Logo></Logo>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i
                                className={
                                    (props.transparent ? "text-white" : "text-gray-800")}
                            ></i><FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
                            (navbarOpen ? " block rounded shadow-lg" : "hidden")
                        }
                        id="example-navbar-warning"
                    >


                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                            <li className="flex items-center ">

                                <a href="https://github.com/Rezasalami" className={"inline-block mb-6 rounded-full bg-gray-300 pr-5 h-10 line-height"}>
                                    <img class="rounded-full float-left h-full"
                                        src="https://avatars2.githubusercontent.com/u/66633502?s=460&u=d8b12453db37274d37a1925dd995e9569912798c&v=4" />
                                    <span class="ml-4"><FontAwesomeIcon className={"h-10"} size="2x" icon={faGithub} /></span>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}