export function validPassword(pas){
    const ltrs = {'a': true, 'b': true, 'c': true, 'd': true, 'e': true, 'f': true, 'g': true, 'h': true, 'i': true, 'j': true, 'k': true, 'l': true, 'm': true, 'n': true, 'o': true, 'p': true, 'q': true, 'r': true, 's': true, 't': true, 'u': true, 'v': true, 'w': true, 'x': true, 'y': true, 'z': true};
    const LTRS = {'A': true, 'B': true, 'C': true, 'D': true, 'E': true, 'F': true, 'G': true, 'H': true, 'I': true, 'J': true, 'K': true, 'L': true, 'M': true, 'N': true, 'O': true, 'P': true, 'Q': true, 'R': true, 'S': true, 'T': true, 'U': true, 'V': true, 'W': true, 'X': true, 'Y': true, 'Z': true};
    const nums = {'0': true, '1': true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true};
    const spls = {'~': true, '!': true, '@': true, '#': true, '$': true, '%': true, '^': true, '&': true, '*': true, '(': true, ')': true, '_': true, '+': true, '-': true, '/': true, '?': true, '"': true, ':': true, ';': true, '[': true, '}': true, ']': true, '`': true, '{': true};

    if (pas.length < 8) {
        return false;
    }

    let l = false, L = false, n = false, s = false;

    for (let i = 0; i < pas.length && !(l && L && n && s); i++) {
        if (!l && ltrs[pas[i]] !== undefined) {
            l = true;
        } else if (!L && LTRS[pas[i]] !== undefined) {
            L = true;
        } else if (!n && nums[pas[i]] !== undefined) {
            n = true;
        } else if (!s && spls[pas[i]] !== undefined) {
            s = true;
        }
    }

    if (l && L && n && s) {
        return true;
    }
    return false;
}