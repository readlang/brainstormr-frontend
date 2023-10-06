// function parameters:
// const dragState = {
//     dragging: dragging, setDragging: setDragging,
//     posX: posX, setPosX: setPosX,
//     posY: posY, setPosY: setPosY
// }

export function dragLogic(dragState) {
    
    function move(event) {
        if (dragState.dragging) {
            dragState.setPosX(dragState.posX + event.movementX)
            dragState.setPosY(dragState.posY + event.movementY)
        }
    }

    window.onpointermove = (event) => move(event)
    document.onpointerup = () => dragState.setDragging(false)
    document.body.onpointerleave = () => dragState.setDragging(false)
}