const Products = () => {
    return (
        <>
            <section className="bg-white/80 py-12">
                <div className="container mx-auto px-4">
                    {/* <!-- grid  de productos--> */}
                    <div id="products-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                        <div className="w-full h-80">

                            <div className="w-20 h-20 border-4 border-t-green-500 border-gray-300 rounded-full animate-spin"></div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

const ProductsCard = () => {

}

export default Products