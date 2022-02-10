const fs = require('fs');


path = "./productos.JSON"

class Manager{
    get = async()=>{
        if(fs.existsSync(path)){
        let data = await fs.promises.readFile(path, "utf-8")
        let products = JSON.parse(data)
        return { status: "success", products };
        }
        else return{status:"error", error: "List not found"}
    }

    getById = async(search) =>{
        if(fs.existsSync(path)){
            let data = await fs.promises.readFile(path, "utf-8")
            let products = JSON.parse(data)
            if(products.length>=search) return {status:"success", payload: products[search-1]}
            else return {status:"error", error: "Product not found"}
            }  
        }
    save = async (product)=>{

            try{
            if(fs.existsSync(path)){
                let data = await fs.promises.readFile(path, "utf-8")
                let products = JSON.parse(data)
                let id = products.length
                id++
                product.id = id      
                products.push(product)
                await fs.promises.writeFile(path,JSON.stringify(products,null,2))
                return {status:"success", message:"Product added"}
                
    
            }else{
            product.id = 1
            await fs.promises.writeFile(path,JSON.stringify([product],null,2))
            return {status:"success", message:"Product added"}
    
            }
           
        }
        catch(error){
            return{status:"error", message:error}
        }
    }
    put = async(search,update) =>{
        if(fs.existsSync(path)){
            let data = await fs.promises.readFile(path, "utf-8")
            let products = JSON.parse(data)
            if(search<=products.length){
                update.id = products[search-1].id
                products[search-1] = update
                await fs.promises.writeFile(path,JSON.stringify(products,null,2))
                return {status:"success", message:"Product updated"}

            }
            else return {status:"error", error: "Product not found"}

        }
    }

    deleteById = async (id) =>{
        if(fs.existsSync(path)){
            let data = await fs.promises.readFile(path, "utf-8")
            let products = JSON.parse(data)
            let newProducts = products.splice(id-1,1)
            await fs.promises.writeFile(path,JSON.stringify(products,null,2))
            return {status:"success", message:"Product deleted"}
        }
        else return {status:"error", error: "Product not found"}
    }
}


module.exports = Manager
