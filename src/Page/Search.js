import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const Search = () => {
    const { updateUserProfile } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const password = form.password.value;
        const selar = form.password.value
        const location = form.location.value
        const email = form.email.value
        const resaleprice = form.resaleprice.value
        const originalprice = form.originalprice.value
        const yearsofuse = form.yearsofuse.value
        const image = event.target.image.files[0]
        const img = form.img.value
        console.log(name, password, selar, resaleprice, location, originalprice, yearsofuse);

        // imgdb 
        const formData = new FormData()
        formData.append('image', image)
        const url = "https://api.imgbb.com/1/upload?key=4afd5aa3a3b053328a48b60685ae493f"

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                updateUserProfile(name, imageData.data.display_url)
            })
            .catch(error => console.log(error))

        const products = {
            name,
            location: location,
            resaleprice,
            selar,
            email: email,
            originalprice,
            yearsofuse,
            img

        }
        console.log(products)
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('products confirmed');

                }
                else {
                    toast.error(data.message);
                }
            })




    }
    return (
        <div>
            <div className="flex items-center justify-center text-center dark:bg-gray-900 ">
                <form onSubmit={handleSubmit} novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid bg-black">
                    <label for="name" className="self-start text-xs font-semibold text-white">name </label>
                    <input id="name" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 " />
                    <label for="email" className="self-start text-xs font-semibold text-white">Email</label>
                    <input id="email" type="email" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 " />
                    <label for="password" className="self-start mt-3 text-xs font-semibold text-white">Password</label>
                    <input id="password" type="password" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <label for="selar" className="self-start mt-3 text-xs font-semibold text-white">Selar</label>
                    <input id="selar" type="selar" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <label for="resaleprice" className="self-start mt-3 text-xs font-semibold text-white">resaleprice</label>
                    <input id="resaleprice" type="resaleprice" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <label for="originalprice" className="self-start mt-3 text-xs font-semibold text-white">originalprice</label>
                    <input id="originalprice" type="originalprice" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <label for="yearsofuse" className="self-start mt-3 text-xs font-semibold text-white">yearsofuse</label>
                    <input id="yearsofuse" type="yearsofuse" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <label for="location" className="self-start mt-3 text-xs font-semibold text-white">Location</label>
                    <input id="location" type="location" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <label for="img" className="self-start mt-3 text-xs font-semibold text-white">img</label>
                    <input id="img" type="img" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <label htmlFor='image' className="self-start mt-3 text-xs font-semibold text-white">img</label>
                    <input id="image" type="file" name='image' accept='image/*' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <div className="flex items-center pl-3">
                        <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <p className='text-white'>excellent</p>
                            <label for="list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 text-white"> </label>
                    </div>
                    <div className="flex items-center pl-3">
                        <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <p className='text-white'>good</p>
                            <label for="list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 text-white"> </label>
                    </div>
                    <div className="flex items-center pl-3">
                        <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <p className='text-white'>fair</p>
                            <label for="list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 text-white"> </label>
                    </div>
                   
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