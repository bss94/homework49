const board = (length: number) => {
    let str: string = '';
    let arr: string[] = []
    for (let i: number = 0; i < length; i++) {
        for (let j: number = 0; j < length; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    str += '██';
                } else {
                    str += '  ';
                }
            } else {
                if (j % 2 === 0) {
                    str += '  ';
                } else {
                    str += '██';
                }
            }
        }
        arr.push(str);
        str = '';
    }
    return arr.join('\n');
}
console.log(board(8));