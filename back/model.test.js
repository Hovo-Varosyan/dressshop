// ageValidate.test.js
const { ageValidate } = require('./db/validate/user');

describe('ageValidate', () => {
    test('должен вернуть true для возраста 18 лет', () => {
        const eDate = new Date();
        eDate.setFullYear(eDate.getFullYear() - 18);
        expect(ageValidate(eDate)).toBe(true);
    });

    test('должен вернуть false для возраста 17 лет', () => {
        const eDate = new Date();
        eDate.setFullYear(eDate.getFullYear() - 17);
        expect(ageValidate(eDate)).toBe(false);
    });

    test('должен вернуть false для возраста 18 лет, но день рождения еще не был в этом году', () => {
        const eDate = new Date();
        eDate.setFullYear(eDate.getFullYear() - 18);
        eDate.setMonth(eDate.getMonth() + 1); // Увеличиваем месяц, чтобы не совпадало с текущим
        expect(ageValidate(eDate)).toBe(false);
    });

    test('должен вернуть true для возраста 18 лет, если день рождения сегодня', () => {
        const eDate = new Date();
        eDate.setFullYear(eDate.getFullYear() - 18);
        expect(ageValidate(eDate)).toBe(true);
    });


    test('должен вернуть false для возраста 201 лет,', () => {
        const eDate = new Date();
        eDate.setFullYear(eDate.getFullYear() - 201);
        eDate.setDate(eDate.getDate() + 1); // Завтра
        expect(ageValidate(eDate)).toBe(false);
    });

    test('должен вернуть true для возраста 18 лет, если день рождения был вчера', () => {
        const eDate = new Date();
        eDate.setFullYear(eDate.getFullYear() - 18);
        eDate.setDate(eDate.getDate() - 1); // Вчера
        expect(ageValidate(eDate)).toBe(true);
    });

    test('должен вернуть false для даты, которая в будущем', () => {
        const eDate = new Date();
        eDate.setFullYear(eDate.getFullYear() + 1); // Завтрашняя дата
        expect(ageValidate(eDate)).toBe(false);
    });

    test('должен вернуть true для точно 18 лет, если сейчас день рождения', () => {
        const eDate = new Date();
        eDate.setFullYear(eDate.getFullYear() - 18);
        expect(ageValidate(eDate)).toBe(true);
    });

    test('должен вернуть false для возраста 17 лет, если день рождения в этом месяце', () => {
        const eDate = new Date();
        eDate.setFullYear(eDate.getFullYear() - 17);
        eDate.setMonth(new Date().getMonth()); // Текущий месяц
        expect(ageValidate(eDate)).toBe(false);
    });
});
