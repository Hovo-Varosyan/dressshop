export default function parseQueryNumber(query, maxValue) {
    const queryNumber = parseInt(query, 10)
    console.log(query)
    if (!Number.isInteger(queryNumber) || queryNumber > maxValue || queryNumber < 0) {
        return 0
    }
    return queryNumber
}