const baseUrl = 'https://api-todolist-multiuser.onrender.com/Son/todos'

const getData = async (endpoint) => {
    const response = await fetch(`${baseUrl}`)
    return await response.json()

    // fetch(`${baseUrl}/${endpoint}`)
    //     .then(res => res.json())
    //     .then(data => {
    //     return data
    //  })
}
const postData = async (endpoint, payload) => {
    const response = await fetch(`${baseUrl}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(  payload),
    })
    return await response.json()
}

const deleteData = async (id) =>{
    const response = await fetch(`${baseUrl}/${id}`,{
        method: 'DELETE',
    })
    return await response.json()
}

const putData = async (id, payload) => {
    const response = await fetch(`${baseUrl}/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    return await response.json()
}


export {
    getData,
    postData,
    deleteData,
    putData,
}