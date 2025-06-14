function getComputerChoice(min,max) {
    const minCeiled=Math.ceil(min);
    const maxFloored=Math.floor(max);

    const choice=Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "scissors"
    }
}
console.log(getComputerChoice(0,4));