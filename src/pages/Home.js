import Products from "./Products";

const Home = () => {
    return (
        <div>
 <div className="hero py-16">
            <div className="container max-w-7xl mx-auto flex items-center justify-between">
                <div className="w-1/2">
                    <h6 className="text-lg"><em>Are You Hungry?</em></h6>
                    <h1 className="text-3xl md:text-6xl font-bold">Don't Wait!</h1>
                    <button className="px-6 py-2 rounded-full font-bold text-white mt-4 bg-yellow-500 hover:bg-yellow-600">Order Now!</button>
                    </div>
                <div className="w-1/2">
        <img className="w-3/5" src="/images/pizza.png" alt="pizza" />
                </div>
            </div>
        </div>
        <div className="pb-24">
        <Products/>
        </div>
        </div>
       
    )
    
}

export default Home;