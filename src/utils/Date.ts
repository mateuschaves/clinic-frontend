export function getAgeFromBirthdate(date: Date): number {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(date).getFullYear();

    return Math.abs(currentYear - birthYear);
}