
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
    if (!matrix || matrix.length === 0) {
        return [];
    }

    return matrix.reduce((acc, currentRow, index) => {
        if (index % 2 === 0) {
            return acc.concat(currentRow);
        } else {
            return acc.concat(currentRow.reverse());
        }
    }, []);
}
