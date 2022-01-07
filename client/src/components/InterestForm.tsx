import React from 'react'
import {
    FormControl,
    FormHelperText,
    FormLabel,
    NumberInput,
    NumberInputField
} from '@chakra-ui/react'

export const InterestForm = ({ values, handleInputChange }: any): JSX.Element => {
    return (
        <div>
            <FormControl>
                <FormLabel htmlFor="initialAmount">Initial deposit</FormLabel>
                <NumberInput defaultValue={values.initialAmount} min={0}>
                    <NumberInputField name="initialAmount" onChange={handleInputChange} />
                </NumberInput>
            </FormControl>
            <FormControl pt={6}>
                <FormLabel htmlFor="monthlyDeposit">Monthly contribution</FormLabel>
                <NumberInput defaultValue={values.monthlyDeposit} min={0}>
                    <NumberInputField name="monthlyDeposit" onChange={handleInputChange} />
                </NumberInput>
                <FormHelperText>Amount that you plan to contribute every month.</FormHelperText>
            </FormControl>
            <FormControl pt={6}>
                <FormLabel htmlFor="interestRate">Interest rate (% P.A.)</FormLabel>
                <NumberInput defaultValue={values.interestRate} min={0} max={100}>
                    <NumberInputField name="interestRate" onChange={handleInputChange} />
                </NumberInput>
            </FormControl>
        </div>
    )
}
