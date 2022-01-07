export const calculateSavings = (
    initialAmount: number,
    time: number,
    rate: number,
    monthlyDeposit: number
): number[] => {
    const eachYearSavings = [initialAmount]
    let futureValue = initialAmount
    for (let i = 1; i <= time; i++) {
        // TODO: formula needs to be corrected:
        const totalForYear = futureValue + monthlyDeposit * 12
        futureValue = totalForYear + totalForYear * (rate / 100)
        eachYearSavings.push(Math.floor(futureValue))
    }
    return eachYearSavings
}

export const validateValues = (values: number[]): boolean => {
    const correctValues = values.filter(value => typeof value === 'number' && value >= 0)
    return correctValues.length === values.length
}
