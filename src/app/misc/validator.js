export function checkInputError(value) {
    if (!value) {
        throw new Error('请输入要转换的字符串');
    } else if (!/^[a-zA-Z0-9@]+$/.test(value)) {
        throw new Error('只能输入大小写字母、数字或@');
    }
}