import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const MainPage = ({ activeItem }) => {
	const [currentActiveItem, setCurrentActiveItem] = useState(activeItem ?? 'create-invoice')

	const darkBackgroundOnActiveItem = 'bg-gray-900';
	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<img
										className="block lg:hidden h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
										alt="Workflow"
									/>
									<img
										className="hidden lg:block h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
										alt="Workflow"
									/>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										<Link
											to='/choose-group'
											onClick={() => setCurrentActiveItem('create-invoice')}
											className={`${currentActiveItem === 'create-invoice' ? darkBackgroundOnActiveItem : 'bg-none'} text-white px-3 py-2 rounded-md text-sm font-medium`}>
											ინვოისის შექმნა
										</Link>
										<Link
											onClick={() => setCurrentActiveItem('invoice-list')}
											to='/invoices-list'
											className={`${currentActiveItem === 'invoice-list' ? darkBackgroundOnActiveItem : 'bg-none'} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
											ინვოისების სია
										</Link>
									</div>
								</div>
							</div>
							<div className="-mr-2 flex sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<MenuIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
							<Disclosure.Button
								as="a"
								href="#"
								className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
								ინვოისის შექმნა
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								ინვოისების სია
							</Disclosure.Button>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default MainPage;
