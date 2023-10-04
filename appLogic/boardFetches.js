export async function postBoard(name) {
    console.log("PostBoard");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/board`, {
        method: 'post',
        credentials: "include",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({name: name}) 
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function getBoard(boardUuid) {
    console.log("getBoard")
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/board/${boardUuid}`, {
        method: 'get',
        credentials: 'include'
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function getMyBoards() {
    console.log("GetMyBoards")
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/board/myboards`, {
        method: 'get',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function updateBoard(boardId, name, isPublic) {
    console.log("updateBoard");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/board/${boardId}`, {
        method: 'put',
        credentials: "include",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({name: name, public: isPublic}) 
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function deleteBoard(boardId) {
    console.log("deleteBoard");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/board/${boardId}`, {
        method: 'delete',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function getCardsForBoard(boardId) {
    console.log("getCardsForBoard");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/board/${boardId}/cards`, {
        method: 'get',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}