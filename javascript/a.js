function a() {
    var name="wzh"
    var b = function () {
        console.log(name)
    }
    return b()
}
a()
// function c() {
//     var b = function () {
//         console.log('123')
//     }
//     return b()
// }
// c()
// console.log(b())