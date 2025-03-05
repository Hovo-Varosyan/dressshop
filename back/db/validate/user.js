function ageValidate(eDate) {
    const date = new Date(),
        birthadey = new Date(eDate),
        month = date.getMonth() >= birthadey.getMonth(),
        day = date.getDate() >= birthadey.getDate();

    let age = date.getFullYear() - birthadey.getFullYear()


    if (age >= 18 && age <= 200 && month && day) return true
    return false

}
module.exports = { ageValidate }