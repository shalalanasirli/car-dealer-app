const date = new Date()

export const getYears = () => {
    return Array.from({ length: date.getFullYear() + 1 - 2015 }).map(
        (_, i) => date.getFullYear() - i,
    )
}
