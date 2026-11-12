function getUserAccess(user) {
  return user.role === "admin";
}

function getGreeting(name) {
  if (name === "") {
    return "Hello, guest!";
  }

  return "Hello, " + name + "!";
}

function calculateTotal(price, quantity) {
  if (price < 0 || quantity < 0) {
    return 0;
  }

  return price * quantity;
}

function parseUserInput(input) {
  if (typeof input !== "string") {
    return input;
  }

  try {
    return JSON.parse(input);
  } catch (error) {
    return input;
  }
}

getUserAccess({ role: "admin" });
getGreeting("Sami");
calculateTotal(10, 2);
