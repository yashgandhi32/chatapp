export const toFromEncode = (str1, str2) => {
    if (parseFloat(str2) > parseFloat(str1)) {
        return str1 + "_" + str2;
    }
    return str2 + "_" + str1;
}

export const toFromDecode = (str) => {
    return str.split("_");
}