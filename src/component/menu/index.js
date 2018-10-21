import React from 'react';
import './index.css'
import { BrowserRouter as Router, Link, BrowserRouter } from 'react-router-dom';
class Menu extends React.Component{
    render(){
        return(
            <ul className="labs">
                <li className="lab">
                    <Link to="/cezar" className="lab__link"></Link>
                    <h2 className="lab__title">Шифр Цезаря</h2>
                    <p className="lab__text">
                        Шифр Цезаря — симетричний алгоритм шифрування підстановками. Використовувався римським імператором Юлієм Цезарем для приватного листування.
                    </p>
                    <a href="https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F" className="lab__more">More info</a>
                </li>
                <li className="lab">
                    <Link to="/tretemiusa" className="lab__link"></Link>
                    <h2 className="lab__title">Шифр Тритемиуса</h2>
                    <p className="lab__text">
                    Шифр Тритемиуса — система шифрования, разработанная Иоганном Тритемием. Представляет собой усовершенствованный шифр Цезаря, то есть шифр подстановки. По алгоритму шифрования, каждый символ сообщения смещается на символ, отстающий от данного на некоторый шаг. Здесь шаг смещения делается переменным, то есть зависящим от каких-либо дополнительных факторов. Например, можно задать закон смещения в виде линейной функции (уравнения зашифрования) позиции шифруемой буквы. Сама функция должна гарантировать целочисленное значение. Прямая функция шифрования должна иметь обратную функцию шифрования, тоже целочисленную.
                    </p>
                    <a href="https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A2%D1%80%D0%B8%D1%82%D0%B5%D0%BC%D0%B8%D1%83%D1%81%D0%B0" className="lab__more">More info</a>
                </li>
            </ul>
        );
    }
}
export default Menu;