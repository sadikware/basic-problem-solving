// Problem:1  radianToDegree

function radianToDegree(radian) {
  if (typeof radian != "number") {
    return "Please Enter Valid Input";
  }
  const degree = parseFloat((radian * (180 / Math.PI)).toFixed(2));
  return degree;
}
console.log(radianToDegree(10));

//Problem:2  isJavaScriptFile

function isJavaScriptFile(str) {
  if (typeof str != "string") {
    return "Please Enter Valid Input";
  }
  const jsFileName = str.slice(-3);
  if (jsFileName === ".js") {
    return true;
  } else {
    return false;
  }
}
console.log(isJavaScriptFile("hello.js"));

// Problem 3: oilPrice

function oilPrice(diesel, petrol, octane) {
  if (
    typeof diesel != "number" ||
    typeof petrol != "number" ||
    typeof octane != "number"
  ) {
    return "Please Enter Valid Input";
  }
  const dieselPrice = diesel * 114;
  const PetrolPrice = petrol * 130;
  const octanePrice = octane * 135;
  const total = dieselPrice + PetrolPrice + octanePrice;
  return total;
}

console.log(oilPrice(0, 2, 3));

// Problem 4: publicBusFare

function publicBusFare(people) {
  if (typeof people != "number") {
    return "Please Enter Valid Input";
  }
  const busRemaining = people % 50;
  const microRemaining = busRemaining % 11;
  const publicBus = microRemaining;
  const totalPublicBusFare = publicBus * 250;
  return totalPublicBusFare;
}

console.log(publicBusFare(49));

// Problem 5: isBestFriend

function isBestFriend(person1, person2) {
  if (
    typeof person1.name != "string" ||
    typeof person1.friend != "string" ||
    typeof person2.name != "string" ||
    typeof person2.friend != "string"
  ) {
    return "Please Enter Valid Input";
  } else if (
    person1.name === person2.friend &&
    person1.friend === person2.name
  ) {
    return true;
  } else {
    return false;
  }
}

const myFriend = {
  name: "abul",
  friend: "kabul",
};
const myFriendsFriend = {
  name: "kabul",
  friend: "abul",
};

console.log(isBestFriend(myFriend, myFriendsFriend));
