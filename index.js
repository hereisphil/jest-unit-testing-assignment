export const obscureCreditCard = (string) => {
    // Wrap in a try/catch to handle non-string inputs
    try {
        // Throw errors if < 12 || > 16
        if (string.length < 12) {
            console.log("Credit card number must be more than 12 digits long.");
            return false;
        } else if (string.length > 16) {
            console.log("Credit card number must be less than 16 digits long.");
            return false;
        }

        // NEW CODE: Return a string literal, use .repeat() method
        // Originally I did: "x" * (string.length -4), but that returns NaN, I was thinking in Python
        return `${"x".repeat(string.length - 4)}${string.slice(string.length - 4)}`;

        /* OLD CODE: BRUTE FORCE METHOD VIA FOR-LOOP
        // Create an array to old the X's of obscurification
        const obscuredString = [];
        // Loop through the string and the required amount of Xs
        // leaving room for the last 4 digits
        for (let i = 0; i < string.length - 4; i++) {
            obscuredString.push("x");
        }
        // Slice off the last 4 digits
        const finalFour = string.slice(string.length - 4);
        // Add that to the array
        obscuredString.push(finalFour);
        // Return the joined array
        return obscuredString.join("");
        */
    } catch {
        console.log("Please enter a valid number between 12 and 16 digits.");
        return false;
    }
};

console.log(obscureCreditCard("1234567890123"));
