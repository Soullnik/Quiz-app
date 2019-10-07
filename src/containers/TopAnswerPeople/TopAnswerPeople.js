import React, {Component} from 'react'
import classes from './TopAnswerPeople.module.css'
import Button from '../../components/UI/Button/Button'
import {Link} from 'react-router-dom'

export default class TopAnswerPeople extends Component {
    render() {
        return (
            <div className={classes.TopAnswerPeople}>
                <div>
                    <h1>Рейтинг</h1>

                    <ul>
                        <li>Топ 1</li>
                        <li>Топ 2</li>
                        <li>Топ 3</li>
                        <li>Топ 4</li>
                    </ul>

                    <Link to="/"><Button type="success">Перейти в список тестов</Button></Link>
                   
                </div>
            </div>
        )
    }
}