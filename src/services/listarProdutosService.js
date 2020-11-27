import api from './api'

async function ListarProdutosService(){
    const response = await api.get('/products')

    if(response.data)
        return response.data
    else{
        return [];
    }
}

export { ListarProdutosService }