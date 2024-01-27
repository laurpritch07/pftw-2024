
//New data type:Arrays!
    // store numerically indexed data
    // creation
    console.log("Hi");
    let myArray = ["john", "jacob", "jingleheimer", "schmitt"];
    console.log(myArray[1]);
    myArray.push("phil");
    myArray[1] = "bob";
    //const myOtherArray = new Array ();
    //const yetAnotherArray = [myArray, "smith" 9]

    //determining the nymber of items in an array
    console.log("my array is this long", myArray.length);

    //figuring out which item is the inex you want
    const philIndex = myArray.indexOf("phil");
    console.log("you can find phil at index"), philIndex
    console.log(myArray)
    // myArray.push("alice") // added an item to the end
   // console.log(myArray);
    const whatWasPopped = myArray.pop();
    console.log("array after pop", myArray)
    console.log("this was popped", whatWasPopped);
    // myArray.splice(1, 0, "gary", "kevin"); // index to start, how many to remove, 3+ items to add
    // console.log("spliced array", myArray);

    myArray.shift();
    console.log("shifted array", myArray)
    myArray.unshift("charlotte");
    console.log("unshifted array", myArray)

    //making arrays from a string with a split 
    const myEmails = "ken@kenkorth.com,kkorthmcad.edu, kkorth@spsco";
    const myEmailArray = myEmails.split(",");
    console.log("email array", myEmailArray);

    //joinin arrats to form a string with join()
    const myCarArray = ["chevy", "subaru", "chevy", "tesla"];
    console.log(myCarArray.join(", "))

    // describe a car
    const myObject = {color: "red"};
    // using square brackets with the key in quotes is array notation
    // using a dot with no quotes is dot notation
    console.log("what is the object color", myObject ["color"]);
    // creation
    const myCar = {
        color: "red",
        make: "honda",
        wheels: "4",
        model: "accord"
    } ;
   /* const youCar = {
        color: "black",
        make: "tesla",
        wheels: "4",
        model: "who knows"
    };*/

    console.log("my car", myCar)
    
    const shipToAddress = {
        addressTypeCode: "ST",
        address1: "123 Right Here Blvd",
        city: "Hershey",
        state: "PA",
        id: "zsdf1234f4"
    };
    
    delete shipToAddress.id;
    console.log("ship to address after id delete", shipToAddress)
    // mutationally adding/changing with key
    shipToAddress.addressTypeCode
    console.log("updated ship to", shipToAddress)
    // objects 
    // const myStringA = "a";
    // const myStringB = myStringA;
    // const shipFrom = shipToAddress;
    // console.log("ship from address", shipFrom);
    //non-mutationally making new objects from old objects
   
    //creating object inside of an array
    const myCollectionOfCommanderDecks = [
        {
            commander: "Breya",
            colors: ["white", "black", "red", "blue"],
            winCon: "make lots of tokens and kill your opponents"
        },
        {
            commander: "Braids",
            colors: ["black"],
            winCon: "make everyone sacrafice their creatures and take life damage"
        }
    ];
    // console.log(myCollectionOfCommanderDecks[2].winCon);
    // use Math.random
   const randomDeckIndex = (Math.floor(Math.random() * myCollectionOfCommanderDecks.length))
   console.log(myCollectionOfCommanderDecks[randomDeckIndex])
   const response = window.prompt("who is the commander for this win con" + [myCollectionOfCommanderDecks]);
   if(response === myCollectionOfCommanderDecks [randomDeckIndex].commander) {
        console.log 
   }
   // Math floor
    // console.log(Math.floor(3.999999999999))