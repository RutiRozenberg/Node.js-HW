const { ProductModel } = require('../services/categoryService')



const getAllCategories = async() => {

    const categories = await getAllDB()
    return categories.toSorted((c1,c2)=>{return c1.category.localeCompare(c2.category)})
}

async function getAllDB(){
    return await ProductModel.find().exec()
}


const getCategoryById = async(id) =>{
    const allCategories =await getAllCategories()
    const category = allCategories.find(c => c.id ===Number(id))
    if(category){
        return category
    }
    return null
}

const updateCategory = async(id ,category) =>{
    const _id = {id:Number(id)}
    const _category= {category:category.category , products:category.products}
    await ProductModel.updateOne(_id , _category)
    return "Data Update!!"
}

const editCategory = async (category)=>{
    const c = { id:Number(category.id) , category:category.category ,products:[]} 
    await ProductModel.insertMany(c)
    return 'Data Received!'
}

const deleteCategory = async(id)=>{
    await ProductModel.deleteOne({ id: id });
    return "Data Delete!!"
} 


module.exports = {
    getAllCategories , 
    getCategoryById ,
    updateCategory,
    editCategory,
    deleteCategory
}

