import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LineChart from './LineChart'
import { InterestForm } from './InterestForm'
import theme from '../theme'
import { calculateSavings, validateValues } from '../helpers'

const styles = {
    container: {
        border: `1px solid ${theme.colors.grey3}`,
        borderRadius: '8px',
        padding: theme.space[6]
    },
    lineChart: {
        paddingTop: theme.space[10]
    }
}

export const InterestCalculator = () => {
    const [values, setValues] = useState({
        initialAmount: 1000,
        monthlyDeposit: 100,
        interestRate: 5
    })

    const [chartData, setChartData] = useState({
        xAxis: Array.from(Array(6).keys()),
        yAxis: calculateSavings(values.initialAmount, 5, values.interestRate, values.monthlyDeposit)
    })

    useEffect(() => {
        updateLineChart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values])

    const updateLineChart = () => {
        const { initialAmount, monthlyDeposit, interestRate } = values
        const hasValidValues = validateValues([initialAmount, interestRate, monthlyDeposit])
        if (!hasValidValues) return
        setChartData(prevState => ({
            ...prevState,
            yAxis: calculateSavings(initialAmount, 5, interestRate, monthlyDeposit)
        }))
    }

    const handleInputChange = (event: any) => {
        setValues(prevState => ({
            ...prevState,
            [event.target.name]: parseInt(event.target.value)
        }))
    }
    return (
        <div style={styles.container}>
            <InterestForm values={values} handleInputChange={handleInputChange} />
            <div style={styles.lineChart}>
                <LineChart
                    title="Savings Over time"
                    xAxisData={chartData.xAxis}
                    yAxisData={chartData.yAxis}
                    xLabel="Years"
                    yLabel="Amount"
                />
            </div>
        </div>
    )
}
