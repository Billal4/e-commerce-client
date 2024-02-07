import { useEffect, useState } from "react";
import SubTiltle from "../title/SubTiltle";
import Title from "../title/Title";


const SummerCollections = () => {

    // const [products, setProducts] = useState([]);
    // const [teenProducts, setTeenProducts] = useState([])
    const [products, setProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [visibleProductCount, setVisibleProductCount] = useState(12);


    // useEffect(() => {
    //     fetch('http://localhost:3000/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data)
    //             setTeenProducts(data.slice(0, 12))
    //         })
    // }, [])
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayedProducts(data.slice(0, visibleProductCount));
            })
    }, [visibleProductCount]);

    // console.log(products)
    // console.log(teenProducts)
    const handleShowMore = () => {
        setVisibleProductCount(prevCount => prevCount + 12);
    };

  



    return (
        <div className="w-full h-auto py-20 ">
            <div className="w-[1200px] mx-auto">
                <div className="text-center">
                    <SubTiltle title={'SUMMER COLLECTION'}></SubTiltle>
                    <Title mainTitle={'Popular T-Shirts'}></Title>
                </div>

            </div>

            <div className="w-full h-full grid grid-cols-4 gap-8 pt-14 px-20">
                {
                  displayedProducts?.map(product =>
                        <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
                            <div className="h-3/4 transition-transform transform hover:scale-105 bg-blue-500">
                                <img className="object-cover w-full h-full" src={product.img} alt={product.productName} />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#0081AC] bg-opacity-50 text-white">
                                <h1 className="text-2xl font-bold">{product.productName}</h1>
                                <p className="mt-2 text-sm">{product.description}</p>
                                <button className="mt-4 py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded transition-transform transform hover:scale-105">
                                    Buy Now
                                </button>
                            </div>
                        </div>


                    )
                }
            </div>

            <div className="flex justify-center pt-10">
                <button  onClick={handleShowMore} className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-orange-300">
                    Show More
                </button>

            </div>



        </div>
    );
};

export default SummerCollections;