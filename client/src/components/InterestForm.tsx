import React from 'react'
import {
    FormControl,
    FormHelperText,
    FormLabel,
    NumberInput,
    NumberInputField
} from '@chakra-ui/react'

interface Props {
    values: {
        initialAmount: number
        monthlyDeposit: number
        interestRate: number
        time: number
    }
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InterestForm = ({ values, handleInputChange }: Props): JSX.Element => {
    return (
        <div>
            <FormControl>
                <FormLabel htmlFor="initialAmount">Initial deposit</FormLabel>
                <NumberInput defaultValue={values.initialAmount} min={0} required>
                    <NumberInputField name="initialAmount" onChange={handleInputChange} />
                </NumberInput>
            </FormControl>
            <FormControl pt={6}>
                <FormLabel htmlFor="monthlyDeposit">Monthly contribution</FormLabel>
                <NumberInput defaultValue={values.monthlyDeposit} min={0} required>
                    <NumberInputField name="monthlyDeposit" onChange={handleInputChange} />
                </NumberInput>
                <FormHelperText>Amount that you plan to contribute every month.</FormHelperText>
            </FormControl>
            <FormControl pt={6}>
                <FormLabel htmlFor="interestRate">Interest rate (% P.A.)</FormLabel>
                <NumberInput defaultValue={values.interestRate} min={0} max={100} required>
                    <NumberInputField name="interestRate" onChange={handleInputChange} />
                </NumberInput>
            </FormControl>
            <FormControl pt={6}>
                <FormLabel htmlFor="time">Years</FormLabel>
                <NumberInput defaultValue={values.time} min={0} max={100} required>
                    <NumberInputField name="time" onChange={handleInputChange} />
                </NumberInput>
            </FormControl>
        </div>
    )
}
