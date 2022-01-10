import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LineChart from './LineChart'
import { InterestForm } from './InterestForm'
import theme from '../theme'
import { validateValues } from '../helpers'

const styles = {
    container: {
        border: `1px solid ${theme.colors.grey3}`,
        borderRadius: '8px',
        padding: theme.space[6]
    },
    element: {
        paddingTop: theme.space[6]
    },
    error: {
        color: theme.colors.danger,
        fontSize: theme.fontSizes.md
    }
}

const serverErrorMessage =
    'An error happened. Please try again or get in touch at interestcalc@finimize.com'

export const InterestCalculator = (): JSX.Element => {
    const [values, setValues] = useState({
        initialAmount: 1000,
        monthlyDeposit: 100,
        interestRate: 5,
        time: 50 // years
    })

    const [chartData, setChartData] = useState({
        xAxis: Array.from(Array(values.time + 1).keys()),
        yAxis: []
    })

    const [error, setError] = useState('')

    const getSavingsData = async () => {
        try {
            const { data } = await axios.post('http://localhost:3001/api/calculateSavings', {
                values
            })
            return data
        } catch (error) {
            setError(serverErrorMessage)
        }
    }

    useEffect(() => {
        updateLineChart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values])

    const updateLineChart = async () => {
        const { initialAmount, time, monthlyDeposit, interestRate } = values
        const hasValidValues = validateValues({ initialAmount, time, interestRate, monthlyDeposit })
        if (!hasValidValues) return
        const savingsData = await getSavingsData()
        setChartData({
            xAxis: !values.time
                ? Array.from(Array(1).keys())
                : Array.from(Array(values.time + 1).keys()),
            yAxis: savingsData
        })
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValues(prevState => ({
            ...prevState,
            [event.target.name]: Number(event.target.value)
        }))
    }
    return (
        <div style={styles.container}>
            <InterestForm values={values} handleInputChange={handleInputChange} />
            <div style={styles.element}>
                Savings for {values.time} years: {chartData.yAxis[chartData.yAxis.length - 1]}
            </div>
            <div style={styles.element}>
                <LineChart
                    title="Savings Over time"
                    xAxisData={chartData.xAxis}
                    yAxisData={chartData.yAxis}
                    xLabel="Years"
                    yLabel="Amount"
                />
            </div>
            {error && <div style={styles.error}>{error}</div>}
        </div>
    )
}
