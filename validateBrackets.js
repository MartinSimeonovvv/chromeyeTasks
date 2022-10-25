const validateBrackets = (s) => {
    let map = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    const BIG_BRACKET = "{";
    const MEDIUM_BRACKET = "[";
    const SMALL_BRACKET = "(";

    let str = s.replace(/[^\[\]\{\}\(\)]/g, "").split("");
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            if (
                str[i] === BIG_BRACKET &&
                (stack.includes(MEDIUM_BRACKET) ||
                    stack.includes(SMALL_BRACKET))
            )
                return false;
            if (str[i] === MEDIUM_BRACKET && stack.includes(SMALL_BRACKET))
                return false;

            stack.push(str[i]);
        } else if (stack[stack.length - 1] === map[str[i]]) {
            stack.pop();
        } else return false;
    }
    return stack.length ? false : true;
};

console.log(validateBrackets("{asd}"));
console.log(validateBrackets("{[(asd)]}"));
console.log(validateBrackets("[{asd}] "));
console.log(validateBrackets("[(asd])"));
console.log(validateBrackets("{aaa[bbb(ccc)ddd]eee}"));
