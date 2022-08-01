import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";

const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

const SingleDropdownItem = ({ fieldName }) => {
	return (
		<Menu.Item>
			{({ active }) => (
				<Link
					to={`/start-creating-invoice?group=${fieldName}`}
					className={classNames(
						active ? "bg-gray-100 text-gray-900" : "text-gray-700",
						"block px-4 py-2 text-sm"
					)}>
					{fieldName}
				</Link>
			)}
		</Menu.Item>
	);
};

const ChooseCategory = ({ categoriesData }) => {
	const navigate = useNavigate();
	return (
		<>
			<p className="text-center text-2xl">აირჩიე ჯგუფი</p>

			<div className="flex h-screen justify-center items-center">
				<ul
					role="list"
					className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{categoriesData.map(singleCategory => (
						<li
							key={singleCategory.name}
							className="col-span-1 flex shadow-sm rounded-md">
							<Menu
								as="div"
								className="flex-1 items-center border-t border-r border-b border-gray-200">
								{singleCategory.href ? (
									<div onClick={() => navigate(singleCategory.href, { replace: true })}>
										<Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 z-0">
											<div className="flex-1 px-4 py-2 text-sm truncate">
												<a className="text-gray-900 font-medium hover:text-gray-600">
													{singleCategory.name}
												</a>
												<p className="text-gray-500">
													{singleCategory.children.length}{" "}
													ქვეკატეგორია
												</p>
											</div>
											<ChevronDownIcon
												className="-mr-1 ml-2 h-5 w-5"
												aria-hidden="true"
											/>
										</Menu.Button>
									</div>
								) : (
									<div>
										<Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 z-0">
											<div className="flex-1 px-4 py-2 text-sm truncate">
												<a className="text-gray-900 font-medium hover:text-gray-600">
													{singleCategory.name}
												</a>
												<p className="text-gray-500">
													{singleCategory.children.length}{" "}
													ქვეკატეგორია
												</p>
											</div>
											<ChevronDownIcon
												className="-mr-1 ml-2 h-5 w-5"
												aria-hidden="true"
											/>
										</Menu.Button>
									</div>
								)}
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
									className="z-10">
									<Menu.Items className="origin-top absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-blue-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
										<div className="py-1">
											{singleCategory.children.map(subCategory => (
												<SingleDropdownItem
													fieldName={subCategory}
													key={subCategory}
												/>
											))}
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default ChooseCategory;
