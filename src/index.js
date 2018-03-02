module.exports = function check(str, bracketsConfig) {
    // your solution
    var strLength = str.length;
    var bracketsLength = bracketsConfig.length;
    var arr = [];
    var num = 0;


    for (var i = 0; i < strLength; i++) {

        for (var j = 0; j < bracketsLength; j++) {

            if (str[i] == bracketsConfig[j][0] &&
                str[i] == bracketsConfig[j][1] &&
                arr[arr.length - 1] == bracketsConfig[j][0]) {
                num--;
                arr.pop();
            } else if (str[i] == bracketsConfig[j][0] &&
                str[i] == bracketsConfig[j][1]) {
                num++;
                arr.push(str[i]);
            } else if (str[i] == bracketsConfig[j][1] &&
                arr[arr.length - 1] != bracketsConfig[j][0]) {
                return (false);
            } else if (str[i] == bracketsConfig[j][1] &&
                arr[arr.length - 1] == bracketsConfig[j][0]) {
                num--;
                arr.pop();
            } else if (str[i] == bracketsConfig[j][0] &&
                str[i] != bracketsConfig[j][1]) {
                num++;
                arr.push(str[i]);
            } else if (str[i] == bracketsConfig[j][1] && num == 0) {
                return (false);
            }
        }
    }
    if (arr.length != 0 || num != 0) {
        return (false);
    }

    return (true);
}