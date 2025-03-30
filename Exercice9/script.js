function checkAge(age) {
    if (isNaN(age)) {
        return "L'âge doit être un nombre.";
    }

    age = parseFloat(age);

    if (age < 18) {
        return "Vous êtes mineur.";
    } else if (age >= 18 && age < 65) {
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes senior.";
    }
}

export default checkAge;
