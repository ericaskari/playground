
class Customer {
    private var name: String
    private var age: Int?
    private(set) var hairColor: String
    private(set) var height: Int

    init(name: String, hairColor: String, height: Int) {
        self.name = name
        self.hairColor = hairColor
        self.height = height
    }

    convenience init(name: String, hairColor: String, age: Int) {
        self.init(name: name, hairColor: hairColor)
        self.age = age
    }

    func changeHairColor(color: String) -> Customer {
        hairColor = color
        return self
    }

    func changeHeight(height: Int) -> Customer {
        self.height = height
        return self
    }
}


@main
public struct playground_swift {
//    public private(set) var text = "Hello, World!"

    public static func main() {
//        print(playground_swift().text)
//        let a5: String = "What"
//        let b5 = "Ever"
//        print(a5, b5)
//
//        let colors = ["red", "green", "blue"]
//
//        if let index = colors.firstIndex(where: {$0.elementsEqual("green")}) {
//            print("green is present in palette at position \(index)")
//        } else {
//            print("green is not present in palette")
//        }
//
//        let items = ("red", "green", "blue")
//        print(items.0, items.1, items.2)
//
//        var var1 = 1
//        var var2 = 2
//
//        print(var1, var2)
//
//        (var2, var1) = (var1, var2)
//
//        print(var1, var2)
//
//        let colors1: [String] = ["red", "green"]
//        let colors2 = ["purple", "gray"]
//        var colors3 = colors1 + colors2
//        print(colors1, colors2, colors3)
//        print(type(of: colors1))
//        let element = colors3.remove(at: 2)
//        print(colors3)
//        print(element, type(of: element))
//
//        var newElement = colors3.append("Black")
//        // Just to test
//        print(newElement, type(of: newElement))
//        print(colors3)

        var input = 54176

        let nums = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
        var output: [Int] = []

        repeat {
            output.append(input % 10)
            input = input / 10
        } while (input > 0)

        let outputAsString = output
                .reversed()
                .map {
                    nums[$0]
                }
                .joined(separator: "-")

        print(outputAsString)

        var user1 = Customer(name: "Eric", hairColor: "Red")
        print(user1.hairColor)
        user1.changeHairColor(color: "Cyan").changeHeight(height: <#T##Int##Swift.Int#>)
        print(user1.hairColor)
        ChangeHairColor( user: &user1, newColor: "Blue")
        print(user1.hairColor)
    }

    static func ChangeHairColor(user: inout Customer, newColor: String) -> Bool {
        user.changeHairColor(color: newColor)
        return true
    }

}
