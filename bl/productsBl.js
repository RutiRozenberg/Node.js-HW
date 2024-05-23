const { ProductModel } = require('../services/categoryService')
const {getCategoryById} = require('../bl/categoryBl')


const getAllProductById=async(categoryId )=>{
    const category =await getCategoryById(categoryId)
    if(category){
        return  category.products.toSorted((p1, p2) => { p1.name.localeCompare(p2.name) })
    }
    return null
}

const getProductById= async (categoryId ,productId)=>{
    const AllProducts=await getAllProductById(categoryId)
    product = AllProducts.find(p=> p.id ===Number(productId))
    if(product){
        return product
    }
    return null
}


const editProduct =async(categoryId , product)=>{
    const products = await getAllProductById(categoryId)
    products.push({id:Number(product.id) , nmae:product.name , price: product.price})
    await ProductModel.updateOne({id:Number(categoryId)}, {products: products})
    return 'Data Received!';
}

const deleteProduct=async(categoryId ,productId)=>{
    const category = await getCategoryById(categoryId)
    category.products= category.products.filter(p=> p.id ===Number(productId))
    await ProductModel.updateOne({id:Number(categoryId)}, {products: category.products})
    return "Data Delete!!"
}

const updateProduct =async(categoryId , productId , product)=>{
    const category = await getCategoryById(categoryId)
    category.products.forEach(p => {
        if(p.id ===Number(productId)){
            if(product.id){
                p.id =product.id 
            }
            if(product.name){
                p.name =product.name
            }
            if(product.price){
                p.price =product.price
            }
        }
    });
    await ProductModel.updateOne({id:Number(categoryId)}, {products: category.products})
    return "Data Update!!"
}


module.exports = {
    getAllProductById,
    getProductById,
    editProduct,
    deleteProduct,
    updateProduct   
}
