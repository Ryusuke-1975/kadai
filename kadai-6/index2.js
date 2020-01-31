const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

try {
    console.log(JSON.parse(str1))
} catch (error) {
    console.log(error)
}
//  abcという文字列は誤っている。"abc"でないといけない。 //


try {
    console.log(JSON.parse(str2))
} catch (error) {
    console.log(error)
}
// JSONではダブルクオーテーションを使って"abc"としないといけない。//


try {
    console.log(JSON.parse(str3))
} catch (error) {
    console.log(error)
}
// 問題はない。 //


try {
    console.log(JSON.parse(str4))
} catch (error) {
    console.log(error)
}
// undefinedではなく具体的な数値を入力する。 //


try {
    console.log(JSON.parse(str5))
} catch (error) {
    console.log(error)
}
// 問題はない。 //


try {
    console.log(JSON.parse(str6))
} catch (error) {
    console.log(error)
}
// aではなく"a"でないといけないから。 //
