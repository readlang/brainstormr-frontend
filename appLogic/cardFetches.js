export async function postCard(content, color, position, size, boardUuid) {
    console.log("postCard")    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/card`, {
        method: 'post',
        credentials: "include",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            content: content,
            color: color,
            position: position,
            size: size,
            boardUuid: boardUuid
        }) 
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function updateCard(cardUuid, content, color, position, size) {
    console.log("updateCard")
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/card/${cardUuid}`, {
        method: 'put',
        credentials: "include",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            content: content,
            color: color,
            position: position,
            size: size
        }) 
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function deleteCard(cardUuid) {
    console.log("deleteCard")
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/card/${cardUuid}`, {
        method: 'delete',
        credentials: "include",
    })
    const data = await response.json()
    console.log(data)
    return data
}