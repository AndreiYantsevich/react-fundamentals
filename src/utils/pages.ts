export const getPageCount = (totalCount: any, limit: number) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages: string | number) => {
    let result = []
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result
}