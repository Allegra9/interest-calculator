export interface ValuesType {
    initialAmount: number
    time: number
    monthlyDeposit: number
    interestRate: number
}

export const validateValues = (values: ValuesType): boolean => {
    if (values.interestRate > 100 || values.time > 100) return false
    const correctValues = Object.values(values).filter(
        value => typeof value === 'number' && value >= 0
    )
    return correctValues.length === Object.values(values).length
}
