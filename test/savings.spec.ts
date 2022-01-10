import { expect } from 'chai'
import { calculateSavings } from '../routes/savings'

describe('CalculateSavings', () => {
  const initialAmount = 1000
  const timeInYears = 5
  const rate = 5
  const monthlyDeposit = 100
  describe('Given valid values', () => {
    const savings = calculateSavings(
      initialAmount,
      timeInYears,
      rate,
      monthlyDeposit
    )
    it('returns the initial amount at index 0', () => {
      expect(savings[0]).to.equal(initialAmount)
    })
    it('returns an array of savings for each year and initial deposit', () => {
      expect(savings).deep.equal([1000, 2310, 3685, 5129, 6646, 8238])
    })
  })
  describe('Given no montly deposit', () => {
    const rate = 0.5
    const monthlyDeposit = 0
    const savings = calculateSavings(
      initialAmount,
      timeInYears,
      rate,
      monthlyDeposit
    )
    it('returns the initial amount at index 0', () => {
      expect(savings[0]).to.equal(initialAmount)
    })
    it('returns an array of savings for each year and initial deposit', () => {
      expect(savings).deep.equal([1000, 1005, 1010, 1015, 1020, 1025])
    })
  })
  describe('Given no initial deposit and no monthly deposits', () => {
    const initialAmount = 0
    const monthlyDeposit = 0
    const savings = calculateSavings(
      initialAmount,
      timeInYears,
      rate,
      monthlyDeposit
    )
    it('returns the initial amount at index 0', () => {
      expect(savings[0]).to.equal(initialAmount)
    })
    it('returns an array of zeros (no savings)', () => {
      expect(savings).deep.equal([0, 0, 0, 0, 0, 0])
    })
  })
})
