import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { StepContent, StepLabel } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DatePicker from './date-picker/date-picker.jsx';
import MyDateRangePicker from './date-range-picker/date-range-picker.jsx';
import MyDateTimePicker from './date-time-picker/date-time-picker.jsx';


function MyStepper() {

    const [activeStep, setActiveStep] = useState(0);
    const [retrievedInfo, setInfo] = useState([])

    // const getInfo = info => setInfo(info) //No se considera una funcion?

    const nextStep = () => {
        setActiveStep(currentStep => currentStep + 1)
        if (activeStep === 3) {
            setActiveStep((currentStep) => currentStep = activeStep)

        }
    }
    const previousStep = () => {
        setActiveStep(currentStep => currentStep - 1)
        if (activeStep === 0) {
            setActiveStep((currentStep) => currentStep = activeStep)
        }
    }

    console.log(retrievedInfo)
    return (<div style={{ margin: 200 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
                <StepLabel>Pick a date</StepLabel>
                <StepContent>
                    <DatePicker /*a={getInfo}**/ //Se la paso al hijo pero este no la considera una funcion


                    ></DatePicker>
                    <Button onClick={nextStep} variant='outlined'>Next step</Button>
                </StepContent>
            </Step>
            <Step>
                <StepLabel>Register your age</StepLabel>
                <StepContent>
                    <MyDateRangePicker></MyDateRangePicker>
                    <Button onClick={nextStep} variant='outlined'>Next step</Button>
                    <Button onClick={previousStep} variant='outlined'>Previous step</Button>
                </StepContent>
            </Step>
            <Step>
                <StepLabel>Register your email</StepLabel>
                <StepContent>
                    <MyDateTimePicker></MyDateTimePicker>
                    <Button onClick={nextStep} variant='outlined'>Next step</Button>
                    <Button onClick={previousStep} variant='outlined'>Previous step</Button>
                </StepContent>
            </Step>
        </Stepper>

    </div>)
}

export default MyStepper