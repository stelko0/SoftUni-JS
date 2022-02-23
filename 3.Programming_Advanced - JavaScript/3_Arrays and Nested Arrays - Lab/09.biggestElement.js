function solve(array) {
    return array.reduce((a, v) => (a = Math.max(...v) > a ? Math.max(...v) : a), -Infinity)
}