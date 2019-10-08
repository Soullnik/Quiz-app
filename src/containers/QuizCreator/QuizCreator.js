import React, {Component} from 'react'
import classes from './QuizCreator.module.css'
import Button from '../../components/UI/Button/Button'
import {createControl} from '../../form/formFramework'
import Input from'../../components/UI/input/Input'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

function creatOptionControl(number){
    return createControl({
            label: `Вариант ${number}`,
            errorMessage: 'Значение не может быть пустым',
            id: number
        }, {required: true})
}

function createFormControls(){
    return {
            question: createControl ({
                label: 'Введите вопрос',
                errorMessage: 'Вопрос не может быть пустым'
            }, {required: true}),
            option1: creatOptionControl(1),
            option2: creatOptionControl(2),
            option3: creatOptionControl(3),
            option4: creatOptionControl(4)
    }
}

export default class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: createFormControls()
    }

submitHandler = event => {
    event.preventDefault()
}

addQuestionHandler = () => {

} 

creareQuizHandlel = () => {

}

changeHandler = (value, controlName) => {

}

renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
        const control = this.state.formControls[controlName]

        return (
            <Auxiliary key={controlName + index}>
            <Input
            label={control.label}
            balue={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.changeHandler(event.target.value, controlName)}
             />
            { index === 0 ? <hr /> : null}
            </Auxiliary>
        )
    })
}

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                <h1>Создание теста</h1>

                <form onSubmit={this.submitHandler}>
                   
                   { this.renderControls()}

                    <select>
                    </select>

                    <Button
                        type="primary"
                        onClick={this.addQuestionHandler}
                    >
                        Добавить вопрос
                    </Button>

                    <Button
                        type="success"
                        onClick={this.createQuizHandler}
                    >
                        Создать тест
                    </Button>
                </form>
                </div>
            </div>
        )
    }
}