import React from 'react';

const LoginPanel = (props) => {
    return ( 
        <>        
        <div className= {props.isRegister ? 'login--hidden' : 'login'}>
            <div className='login__text'>LOGOWANIE</div>
            <div className='login--info'>Restauracja twoich marzeń!</div>
            <div className='login--info'>Zaloguj się i zamawiaj swoje ulubione dania</div>
            <div className='login__input-items'>
                <div className='col-10'>
                    <input placeholder='login'  name='login' value={props.loginName} className='login__input' type="text" onChange={props.handleChangeInputLogin} />
                </div>
                <div className='col-10'>
                    <input placeholder='hasło' name='pass' value={props.loginPassword} className='login__input' type="text" onChange={props.handleChangeInputLogin} />
                </div>
                <button className='login__btn-login' onClick={props.handleLoginProfile}>Zaloguj</button>
            </div>
            <div className='container col-12 login--center'>
                {/* Jeśli nie posiadasz konta,   */}
            {/* <label className='login__btn-register' onClick={props.handleRegisterProfile}> Zarejestruj się</label> */}
             Wypełnij podstawowe dane i ciesz się pysznym jedzeniem. Zamów już teraz</div>
            <div className='login__btn-none-account' onClick={props.handleLoginNoneAccount}>Kontynuuj bez konta</div>


            {/* <div className='user-choice'>
                <div className='col-5 user-choice__admin' onClick={props.handleChoiceAdmin}>Administrator</div>
                <div className='col-5 user-choice__client' onClick={props.handleChoiceClient}>Klient bez logowania</div>
          </div> */}
        </div>
        {props.isRegister ? 
        <div className='register'>
            <div className='container register__row'>
                <div className='register__back' onClick={props.handleBackFromRegister}>Wróć</div>
                <div className='col-8 register__text'>Rejestracja nowego konta</div>
            </div>
            <div className='register__info container'>Dołącz do nas wypełniając podstawowe informacje i zamawiaj!</div>
            <div className='register__items'>
                <input className='col-10 register__input' placeholder='Imię' type="text" />
                <input className='col-10 register__input' placeholder='Nazwisko' type="text" />
                <input className='col-10 register__input' placeholder='Numer telefonu' type="text" />
                <input className='col-10 register__input' placeholder='Hasło' type="text" />
            <button className='register__btn-register'>Zarejestruj</button>
            </div>
        </div>

        :
            null
        }
        </>
     );
}
 
export default LoginPanel;