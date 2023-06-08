export const removeFirstSlash = (str) => {
    const firstLetter = str[0]
    if (firstLetter === '/') {
        str = str.slice(1)
        if (!str.includes('https://secure.gravatar.com/avatar/')) {
            return 'https://secure.gravatar.com/avatar/' + str
        }
    }
    return str
}
