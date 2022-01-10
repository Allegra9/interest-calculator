import express from 'express'
import { validateValues } from '../utils'

export const savingsRouter = express.Router()

export const calculateSavings = (
  initialAmount: number,
  time: number,
  rate: number,
  monthlyDeposit: number
): number[] => {
  const eachYearSavings = [initialAmount]
  let futureValue = initialAmount
  for (let i = 1; i <= time; i++) {
    // TODO: formula needs to be checked (if annual or monthly)
    const totalForYear = futureValue + monthlyDeposit * 12
    futureValue = totalForYear + totalForYear * (rate / 100)
    eachYearSavings.push(Math.floor(futureValue))
  }
  return eachYearSavings
}

savingsRouter.post('/', (req, res) => {
  const { initialAmount, time, monthlyDeposit, interestRate } = req.body.values
  const hasValidValues = validateValues({
    initialAmount,
    time,
    interestRate,
    monthlyDeposit
  })
  if (!hasValidValues) throw new Error('Invalid values')
  const savings = calculateSavings(
    initialAmount,
    time,
    interestRate,
    monthlyDeposit
  )
  res.send(savings)
})
