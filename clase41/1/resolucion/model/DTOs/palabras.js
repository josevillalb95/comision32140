function palabraDTO(palabra,_id,timestamp) {
    return {
        ...palabra,
        _id,
        timestamp
    }
}

export default palabraDTO