export const addIndex = (testcases) => {
    let index = 0;
    return testcases.map((e) => {
        e.index = index;
        index++;
        return e;
    });
}