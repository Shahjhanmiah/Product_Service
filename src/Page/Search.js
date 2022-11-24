import React from 'react';

const Search = () => {
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const password = form.password.value;
        const selar = form.password.value
        const price = form.price.value
        const location = form.location.value
        console.log(name,password,selar,price,location);

        const booking = {
            name,
            location:location,
            price,
            selar
        }
        console.log(booking);

    }
    return (
        <div>
            <div className="flex items-center justify-center text-center dark:bg-gray-900 ">
                <form onSubmit={handleSubmit} novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid bg-black">
                    <label for="name" className="self-start text-xs font-semibold text-white">name </label>
                    <input id="name" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 " />
                    <label for="password" className="self-start mt-3 text-xs font-semibold text-white">Password</label>
                    <input id="password" type="password" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <label for="selar" className="self-start mt-3 text-xs font-semibold text-white">Selar</label>
                    <input id="selar" type="selar" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <label for="price" className="self-start mt-3 text-xs font-semibold text-white">Price</label>
                    <input id="price" type="price" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <label for="location" className="self-start mt-3 text-xs font-semibold text-white">Location</label>
                    <input id="location" type="location" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-orange-500 dark:text-gray-900 text-white">Search</button>
                    <div className="flex justify-center mt-6 space-x-2 text-xs">
                       
                        <a rel="noopener noreferrer" href="#" className="dark:text-gray-400text-white">Search</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;