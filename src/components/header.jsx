import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox, faFileCode, faBoxOpen, faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	const [searchFocused, setSearchFocused] = useState(false);
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	return (
		<header className="text-lg mx-2 my-5 h-10">
			<nav className="flex justify-between h-full">
				<div className="flex">
					<div className="flex items-center">
						<a href="" className="text-white/70 transition ease-in-out flex items-center hover:-translate-y-1">
							<FontAwesomeIcon icon={faBoxOpen} className="text-4xl" />
						</a>
					</div>

					<div className="w-0.5 bg-slate-800 mx-4 rounded-sm" />

					<div className={`p-1 flex items-center rounded-lg border ${searchFocused ? "bg-white/5 border-white/20" : "border-white/10"} transition ease-in-out`}>
						<svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 flex-none">
							<path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
							<circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
						</svg>
						<input className={"h-full bg-transparent outline-none"} type="text" placeholder="검색" onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} />
					</div>
				</div>
				<button
					type="button"
					className="w-10 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:border-white/20 hover:text-white focus:outline-none"
					onClick={() => setHamburgerOpen(!hamburgerOpen)}>
					{hamburgerOpen ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
				</button>

				<ul className="hidden gap-6 items-center md:flex">
					<li className="cursor-pointer hover:text-primary transition">
						<FontAwesomeIcon icon={faToolbox} /> Tools
					</li>
					<li className="cursor-pointer hover:text-primary transition">
						<FontAwesomeIcon icon={faFileCode} /> Snippets
					</li>
				</ul>
			</nav>

			{/* <div className="space-y-1 px-2 pb-3 pt-2">
				<a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium">
					Dashboard
				</a>
				<a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
					Team
				</a>
				<a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
					Projects
				</a>
				<a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
					Calendar
				</a>
			</div> */}
		</header>
	);
}
