import React, { Component } from 'react';
import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import clickpng from '../icons/clicking.png';
import Home from './Home';
import AdministratorPanel from './AdministratorPanel';
import LoginPanel from './LoginPanel';
import coke from '../icons/coke.png';
import soda from '../icons/sprite.png';
import tea from '../icons/water.png';
import coffee from '../icons/lemon.png';
import restaurant from '../icons/restaurant.png';
import home from '../icons/home.png';
import pizza1 from '../images/pizza-1.png';
import pizza2 from '../images/pizza-2.jpg';
import pizza3 from '../images/pizza-3.png';
import pizza4 from '../images/pizza-4.png';
import pizza5 from '../images/pizza-5.png';
// <a target="_blank" href="https://icons8.com/icon/114455/coca-cola">Coca Cola</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>



class App extends Component {
  state = {
    // false default
    administrator: false,
    //  false default pominięcie logowania
    client: true,
    // defaultowo loginName oraz loginPassword puste powinno być
    loginName:'admin',
    loginPassword:'123qwe',
    // To id powinno być '', na czas pisania aplikacji default np. 1
    clientId:1,
    // false default
    isCorrectLogin: false,
    // false default
    isCorrectPassword: false,
    // false default
    adminPanel: false,
    // rejestracja użytkownika
    isRegister: false,
    account:[
      {id:1, login: 'admin', password: '123qwe'},
      {id:2, clientId:1, login: 'jkowalski', password: '123qwe'},
      {id:3, clientId:2, login: 'pnowak', password: '123qwe'},
      {id:4, clientId:3, login: 'jkret', password: '123qwe'},
    ],
    // Powiadomienia nie mogą być kasowane po zmianie klient -> admin
    notifications:[
      {id: 0, clientId: 1, text: 'Twoje zamówienie zostało opłacone', currentTime:'10:20' },
      {id: 1, clientId: 1, text: 'Twoje zamówienie zostało opłacone', currentTime:'13:10' },
    ],
    textNotification: '',
    // Counter ustawiony ma być w zależności ile domyślnie bedzie obiektów w notifications
    counterId:2,
    // powiadomienia
    isShowNotification: false,
    counterNotification: 0,
    blikNotifications: false,
    resetBlikCode: false,
    obj: {id:'', clientId: '', text: '',},
    // logowanie
    activeUserLogin: '',
    activeUserPassword: '',
    adminActive: false,
    userAccountActive: false,
    userNoAccountActive: false,
    isProfileSettingsActive: false,
    isActiveScreen: false,
    // póki co true, default false
    isActiveSearch: false,
    isYourOrder: false,
    activeYourOrder: false,
    isActiveAllFoods: false,
    meals: [
      {id:1, name: ' Prosciutto Cotto',type: 'eat', price: 20, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne i szynką gotowaną', img:pizza2, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:2, name: 'Margherita', type: 'eat', price: 10, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne i i świeżą bazylia', img:pizza3, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: true,},
      {id:3, name: 'Salame Piccante', type: 'eat', price: 30, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne, pikantnym salami i czosnkiem', img:pizza4, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:4, name: 'Margherita di Bufala', type: 'eat', price: 10, description:'z pomidorami San Marzano D.O.P., mozzarellą z mleka bawolego i świeżą bazylią', img:pizza5, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: true,},
      {id:5, name: 'Nepoletana', type: 'eat', price: 45, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne, po piecu: prosciutto crudo, rukola i parmezan', img:pizza1, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:6, name: 'Coca-cola', type: 'drink', price: 5, description:'słodki napój gazowany', img:coke, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:7, name: 'Sprite', type: 'drink', price: 10, description:'słodki napój gazowany o smaku limonki i cytryny', img:soda, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:8, name: 'Woda', type: 'drink', price: 12, description:'woda niegazowana', img:tea, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:9, name: 'Lemoniada', type: 'drink', price: 10, description:'lemoniada', img:coffee, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
    ],
    orders:[
      {id:1, name: 'jeden',place:'W restauracji', tableNumber:2, price: 20, number: 2, clientId: 1,  dateOfRelease:'Tue 28 2022', timeOfRelease:'18:20', status: '0', isChangeStatus:false, city: '', street:'', homeNumber: ''},
      {id:2, name: 'dwa', place:'W restauracji', tableNumber:2, price: 10, number: 2, clientId: 1,  dateOfRelease:'Wed 29 2022', timeOfRelease:'18:25', status: '1', isChangeStatus:false, city: '', street:'', homeNumber: ''},
      {id:3, name: 'trzy', place:'Dostawa', tableNumber:null, price: 30, number: 2, clientId: 2,  dateOfRelease:'Tue 28 2022', timeOfRelease:'17:30', status: '2', isChangeStatus:false, city: 'Kraków', street:'Krakowska', homeNumber: '13'},
      {id:4, name: 'cztery', place:'W restauracji', tableNumber:9, price: 10, number: 2, clientId: 3, dateOfRelease:'Tue 28 2022', timeOfRelease:'18:05', status: '3', isChangeStatus:false, city: '', street:'', homeNumber: ''},
      // {id:5, name: 'pięć', place:'W restauracji', tableNumber:1, price: 10, number: 2, clientId: 3, dateOfRelease:'Tue 28 2022', timeOfRelease:'10:05', status: 4, isChangeStatus:false,},
    ],
    typeMeal: false,
    place: [
      {id:1, place:'W restauracji',image: restaurant, isActive: true, },
      {id:2, place:'W domu',image: home, isActive: false,}
    ],
    tables:[
      {id:1, isChecked: false},
      {id:2, isChecked: false},
      {id:3, isChecked: false},
      {id:4, isChecked: false},
      {id:5, isChecked: false},
      {id:6, isChecked: false},
      {id:7, isChecked: false},
      {id:8, isChecked: false},
      {id:9, isChecked: false},
      {id:10, isChecked: false},
    ],
    chooseTable: '',
    // REZYGNACJA Z formOrder
    formOrder: [
      {id: 1, name: '', surname: '', phoneNumber: '', today: '', hour: '',},
      {id: 2, name: '', surname: '', phoneNumber: '', street: '', city: '',},
    ],
    paymentMethod:[
      {id:1, methods: 'Płatność Blik', isActive: true, },
      {id:2, methods: 'Płatność na miejscu', isActive: false, }
    ],
    // formularz danych osobowych 
    name: '',
    surname: '',
    phoneNumber: '',
    street: '',
    city: '',
    numberHome: '',
    date: '',
    time: '',
    freeTable: 10,
    firstBlikNumber:'',
    secondBlikNumber:'',
    thirdBlikNumber:'',
    fourthBlikNumber:'',
    randomBlikGenerateCode:'',
    blikCode:'',
    isActiveBlikCode: false,
    timerValue:5,
    showBlikContent: false,
    blikResult:false,
    saveForm: false,
    searchMeal:'',
    deliveryTime: '',
    randomDeliveryTime: 0,
    textDateForDelivery:'',
    isChangeStatus: false,
    currentTime: '',
    activeStatusForPanelAdministrator: '1',
    // Pokazanie podsumowania zamówienia
    isSummaryOrder: false,
    isClosedSummary: false,
    // historia zamówień na profilu
    isHistoryActive: false,
    // Stoliki
    isActiveTablesView: false,
  }
  
  // Wybór aplikacja jako administratora
  handleChoiceAdmin = ()=>{
    this.setState({
      administrator: true,
    })
  }
  // Wybór aplikacja jako klienta
  handleChoiceClient = () =>{
    this.setState({
      client: true,
    })
  }
  // Logowanie do aplikacji
  handleLoginProfile =() =>{
    console.log('logowanie')
    // logowanie dla admina
    if(this.state.isCorrectLogin && this.state.isCorrectPassword){
      console.log('hasło i login sa poprawne')
      this.setState({
        adminPanel: true,
        activeUserLogin: this.state.loginName,
        activeUserPassword: this.state.loginPassword,
        adminActive: true,
      })
   }else{
     console.log('hasło i login nie są poprawne')
   }
    let arrayUsers = this.state.account;
    // console.log(arrayUsers)
    const findUserLogin = arrayUsers.filter(item => item.login.includes(this.state.loginName))
    console.log(findUserLogin)
    // Aktualizacja identyfikator klienta 
    this.setState({
      clientId: findUserLogin[0].clientId,
    })
    // console.log(findUserLogin[0].login)
    if(findUserLogin[0] !== undefined){
      // Jeśli dane logowania są prawidłowe hasło oraz login
      if(findUserLogin[0].login === this.state.loginName && findUserLogin[0].password === this.state.loginPassword){
        console.log('Istnieje taki login oraz hasło')
        this.setState({
          adminActive: false,
          userAccountActive: true,
          userNoAccountActive: false,
          activeUserLogin: this.state.loginName,
          activeUserPassword: this.state.loginPassword,
        })
        setTimeout(()=>{
          this.setState({
            client: true,
          })
        },1000)
      }else{
        console.log('Nie istnieje taki login i hasło')
      }
    }else{
      console.log('Dane są niepoprawne')
      return
    }

  }
  handleChangeInputLogin = (e) =>{
    // Logowanie dotyczy admina
    // Aktualizacja state login do konta oraz sprawdzenie czy login jest poprawny
    if(e.target.name === 'login'){
      this.setState({
        loginName: e.target.value,
      }) 
      if(e.target.value === this.state.account[0].login){
        console.log('Poprawny login')
        this.setState({
          isCorrectLogin: true,
        })
      }
    }
    // Aktualizacja state hasło do konta oraz sprawdzenie czy hasło jest poprawne
    if(e.target.name === 'pass'){
      this.setState({
        loginPassword: e.target.value,
      })
      if(e.target.value === this.state.account[0].password){
        console.log('Poprawne hasło')
        this.setState({
          isCorrectPassword: true,
        })
      }
    }
    // logowanie dotyczy uzytkowników
  }
  // Rejestracja użytkownika
  handleRegisterProfile = () =>{
    console.log('rejestracja')
    this.setState({
      isRegister: true,
    })
  }
  // Powrót do logowania (w rejestracji)
  handleBackFromRegister = ()=>{
    console.log('powrót z rejestracji')
    this.setState({
      isRegister: false,
    })
  }
  // Logowanie bez konta
  handleLoginNoneAccount = () =>{
    console.log('logowanie bez konta')
    this.setState({
      client: true,
    })
  }
  handleShowNotificationContent = () =>{
    this.setState({
      isShowNotification: !this.state.isShowNotification,
    })
  }
  // Powrót do wyboru profilu (administrator / klient)
  handleBackToProfiles = () =>{
    this.setState({
      administrator: false,
    })
  }
  // Start aplikacji
  handleStartApp = () =>{
    this.setState({
      isActiveScreen: true,
    })
  }
  // Uruchomienie wyszukiwarki
  handleStartSearch = () =>{
    this.setState({
      isActiveSearch: !this.state.isActiveSearch,
    })
  }
  // Logowanie do panelu administratora
  handleLoginAccount = (e) =>{
    // Aktualizacja state login do konta oraz sprawdzenie czy login jest poprawny
    if(e.target.name === 'login'){
      this.setState({
        loginName: e.target.value,
      }) 
      if(e.target.value === this.state.account[0].login){
        console.log('Poprawny login')
        this.setState({
          isCorrectLogin: true,
        })
      }
    }
    // Aktualizacja state hasło do konta oraz sprawdzenie czy hasło jest poprawne
    if(e.target.name === 'pass'){
      this.setState({
        loginPassword: e.target.value,
      })
      if(e.target.value === this.state.account[0].password){
        console.log('Poprawne hasło')
        this.setState({
          isCorrectPassword: true,
        })
      }
    }
  }
  // Umozliwia zalogowanie się na konto administratora
  handleLogIn = () =>{
  // Sprawdzenie czy hasło i login do konta są poprawne
  // administrator
  // 123qwe
    if(this.state.isCorrectLogin && this.state.isCorrectPassword){
       console.log('hasło i login sa poprawne')
       this.setState({
         adminPanel: true,
       })
    }else{
      console.log('hasło i login nie są poprawne')
    }
  }
  // Aktywacja profilu użytkownika (~ustawień)
  handleProfileSettingActive = () =>{
    this.setState({
      isProfileSettingsActive: !this.state.isProfileSettingsActive,
    })
  }
  // Licznik powiadomień
  handleCounterNotification = () =>{
    // counter++
  }
  // Zamknięcie powiadomień
  handleCloseNotification = () =>{
    this.setState({
      isShowNotification: false,
    })
  }
  // Powiadomienie dla blika
  handleShowBlikNotification = () =>{
    this.setState({
      blikNotifications: true,
    })
  }
  // Zamknięcie powiadomienia blik
  handleCloseBlikNotification = () =>{
    this.setState({
      blikNotifications: false,
    })
  }
  // Działanie wyszykiwarki
  handleChangeSearch = (e)=>{
    setTimeout(()=>{
      let text = e.target.value.toLowerCase();
      this.setState({
        searchMeal: text,
      })
    },500)
    // Jeśli wyszukiwarka jest nieaktywna, to działa blokada na wprowadzanie znaków w wyszukiwarce 
    if(this.state.isActiveSearch === false){
      e.target.value = null
      this.setState({
        searchMeal: '',
      })
    }
  }
  // funckja obługuję zmianę statusu isActive. Przełącznik aktywnego miejsca
  handleChangePlaceActive = (id) =>{
    const elements = this.state.place.filter(element => {
      if(id === element.id){
        element.isActive = !element.isActive
      }
      if(id !== element.id){
        element.isActive = !element.isActive
      }
      const item = element.isActive
      return item
    })
          this.setState({
            elements
      })
  }
  // Ustawenie przycisku wszystkie posiłki
  handleChangeActiveAllFoods = () =>{
    this.setState({
      isActiveAllFoods: !this.state.isActiveAllFoods,
    })
  }
  // Zwiększanie ilości wybranego posiłku 
  handleAddNumberMeal = (id) =>{
    const items = this.state.meals.map(item => {

      if(id === item.id){
        this.setState({
          number: item.number +=1,
        })
      }
      return items
    })
  }
  // Zmniejszanie ilości wybranego posiłku
  handleSubstractNumberMeal = (id) =>{
    const items = this.state.meals.map(item => {
      if(id === item.id){

        if(item.number > 0){
          this.setState({
            number: item.number -=1,
  
          })
        }
      }
      return items
    })
  }
  // Wybieranie posiłku
  handleCheckedMeal = (id) =>{
    const checkedMeals = this.state.meals.map(item => {
      if(id === item.id){
          item.isChecked = !item.isChecked
      }
      const element = item.isChecked
      return element
    })
    
    this.setState({
      checkedMeals,
    })
  //aktywacja belki z zamówieniem
    const elementsActive = this.state.meals.filter(item => item.isChecked ===true)
    // console.log(elementsActive.length)
    if(elementsActive.length > 0){
      this.setState({
        isYourOrder: true,
      })
      }else{
        this.setState({
          isYourOrder: false,
        })
    }
  }
  // Pokaż opis posiłku
  handleShowInfoAboutMeal = (id) =>{
    const showDescriptonItems = this.state.meals.map(item =>{
      if(id === item.id){
        item.showInfoMeal = !item.showInfoMeal;
      }
      const element = item.showInfoMeal;
      return element;
    })
    this.setState({
      showDescriptonItems,
    })
    console.log(id)

  }
  // Pokaż opis posiłku z poziomu wyszukiwarki
  handleShowInfoAboutMealFromSearch = (id) =>{
    const showDescriptonItemsFromSearch = this.state.meals.map(item =>{
      if(id === item.id){
        item.showInfoFromSearch = !item.showInfoFromSearch;
      }
      const element = item.showInfoFromSearch;
      return element;
    })
    this.setState({
      showDescriptonItemsFromSearch,
    })
    console.log(id)
    console.log(id)

  }
  // funkcja obsługuje formularz
  handleChangeInput = (e) =>{
    const name = e.target.name;

    if(name === "username"){
      this.setState({
        name: e.target.value,
        // isYourOrder: true,
      })
      
    };
    if(name === "user-surname"){
      this.setState({
        surname: e.target.value,
        // isYourOrder: true,
      })
    };
    if(name === "phone"){
      this.setState({
        phoneNumber: e.target.value,
        // isYourOrder: true,
      })
    };
    if(name === "city"){
      this.setState({
        city: e.target.value,
        // isYourOrder: true,
      })
    };
    if(name === "street"){
      this.setState({
        street: e.target.value,
        // isYourOrder: true,
      })
    };
    if(name === "numberHome"){
      this.setState({
        numberHome: e.target.value,
        // isYourOrder: true,
      })
    };
  
  }
  //funkcja walidująca wybraną datę i godzinę
  handleDateValue = (e) =>{
    const name = e.target.name;
    const chooseDate = e.target.value;
    // Data
    let parseDate = Date.parse(chooseDate);
    let newDate = new Date ();
    let day = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    let fullDate = `${year}-${month+1}-${day}`
 
    let parseCurrentDate = Date.parse(fullDate)
    
    // Sprawdzenie czy wybrana data jest prawidłowa tzn. nie można wybrać daty wstecz
    if(name === "date"){  
     if(parseDate >= parseCurrentDate){
       this.setState({
         date: e.target.value,
       })
     }else{
       alert('Nie można wybrać daty wstecz');
       e.target.value = '';
       this.setState({
         date: '',
       })
     }
    }
    if(name === "time"){  
      
    // Wybrana godzina
    const chooseHour = e.target.value
    
    let hour = chooseHour.substr(0, 2);
    
    let minutes = chooseHour.substr(3, 2);
    
    let parseHours = parseInt(hour, 10);
    
    let parseMinutes = parseInt(minutes, 10);
    
    // Obecna godzina

    let time = new Date();
    let currentHour = time.getHours();
    let currentMinute = time.getMinutes();

    //Data
    // Sprawdzenie czy wybrana godzina jest w zakresie 8-22
    if(parseHours >= 22 || parseHours < 8){
      alert('Lokal czynny jest w godzinach 8-22, rezerwacja nie jest możliwa o wybranej godzinie')
      e.target.value = '';
    }else{
      this.setState({
        time: e.target.value,
      })
    }
    
    let parseDateForTime = Date.parse(this.state.date)
 
    // Sprawdzenie czy godzina wybranego dnia nie jest wcześniejsza niż obecna
    if(parseDateForTime === parseCurrentDate){
      if(parseHours <= currentHour){
        if(parseMinutes < currentMinute){
          e.target.value = ''
          this.setState({
            time: '',
          })
          alert('Podana godzina jest niemożliwa do uzyskania rezerwacji, wybierz poźniejszą godzinę');
        }
      }
    }
  }
  }
  handleChangeActiveYourOrder = () =>{
    this.setState({
      activeYourOrder: !this.state.activeYourOrder,
    })
  }
  handleChangeIsVege=()=>{
    this.setState({
      typeMeal: !this.state.typeMeal,
    })
  }
  // funckja obługuję zmianę statusu isActive. Przełącznik aktywnego miejsca
  handleChangePayments = (id) =>{
       const activePaymentsMethod = this.state.paymentMethod.filter(element => {
        if(id === element.id){
          element.isActive = !element.isActive
        }
        if(id !== element.id){
          element.isActive = !element.isActive
        }
        const item = element.isActive
        return item
      })
            this.setState({
              activePaymentsMethod
        })
  }
  // funkcja generuje kod blik
  handleBlikCode = () =>{
    // const randomBlikCode = Math.floor(Math.random()*9999);
    const randomBlikCode = Math.floor(1000 + Math.random() * 9000);
    console.log(randomBlikCode)
    this.setState({
      randomBlikGenerateCode: randomBlikCode,
      isActiveBlikCode: true,
      blikNotifications: true,
      showBlikContent: !this.state.showBlikContent,
    })
    // Interwał dla funkcji odliczającej czas ważności kodu blik
    clearInterval()
    setInterval(() => this.timerBlik(), 1000);
      
  }
  // Funkcja resetuje kod blik --> kosmos
  resetBlikCode = () =>{
    const randomBlikCode = Math.floor(1000 + Math.random() * 9000);
    console.log(randomBlikCode)
    setTimeout(() =>{
      this.setState({
        timerValue: 5,
        randomBlikGenerateCode: randomBlikCode,
      })
      let myinterval = setInterval(()=>{
        if(this.state.timerValue > 0){
          this.setState({
            timerValue: this.state.timerValue-1,
          })
        }
        if(this.state.timerValue === 0){
          clearInterval(myinterval)
        }
      }, 1000)
      
    }, 1000
    )

  }
  // Funkcja aktualizuje czas ważności kodu blik
  timerBlik = ()=>{
    if(this.state.timerValue > 0 && this.state.isActiveBlikCode){
      this.setState({
        timerValue: this.state.timerValue-1,
      })
    }else{
      this.setState({
        isActiveBlikCode: false,
        resetBlikCode: true,
        // timerValue: 5,
      })
      return
    }
    console.log(this.state.timerValue)
    // if(this.state.timerValue === 0 && this.state.isActiveBlikCode){
    //   this.setState({
    //     timerValue: 5,
    //   })
    //   this.setState({})
    // }
  }
  // Funkcja przyjmująca znaki w inpucie
  handleChangeInputBlikCode = (e) =>{

  //Focus na kolejny input
    const nodeList = document.querySelectorAll('.blik-input')
    const array = Array.from(nodeList)

    if(this.state.firstBlikNumber !== null){
      array[1].focus();
    } 
    if(this.state.firstBlikNumber && this.state.secondBlikNumber !== null){
      array[2].focus();
    } 
    if(this.state.firstBlikNumber && this.state.secondBlikNumber && this.state.thirdBlikNumber !== null){
      array[3].focus();
    } 
 
    // Ustanienie wpisanej wartości dla state'u
    if(e.target.name ==="first"){
      this.setState({
        firstBlikNumber: e.target.value,
        
      })

    }else if(e.target.name === "second"){
      this.setState({
        secondBlikNumber: e.target.value,
        
      })
 
    }else if(e.target.name === "third"){
      this.setState({
        thirdBlikNumber: e.target.value,
      })

    }else if(e.target.name === "fourth"){
      this.setState({
        fourthBlikNumber: e.target.value,
      })
    }
    // console.log(this.state.test)
    // let code = `${this.state.firstBlikNumber}${this.state.secondBlikNumber}${this.state.thirdBlikNumber}${this.state.fourthBlikNumber}`
    // console.log(code)
  }
  // Funkcja tworzy kod blik i porównuje czy jest poprawny z wygenerowanym kodem blik
  sendBlikCode = () =>{
    let code = parseInt(`${this.state.firstBlikNumber}${this.state.secondBlikNumber}${this.state.thirdBlikNumber}${this.state.fourthBlikNumber}`)
    console.log(code)
    this.setState({
      counterId: this.state.counterId+1,
    })
    // console.log(this.state.randomBlikGenerateCode)
    
    if(code === this.state.randomBlikGenerateCode){
      this.setState({
        // blikCode: code
        blikResult: true,
        isSummaryOrder: true,
        blikNotifications: false,

        activeYourOrder: false,
          obj:{
            id: this.state.counterId,
            clientId: this.state.clientId,
            text: 'Twoje zamówienie zostało opłacone',
            currentTime: this.state.currentTime
          },
      })
      this.handleCurrentTime();
    }
    // this.handleActionNotification()
    // if(this.state.randomBlikGenerateCode === this.state.blikCode){
    //   this.setState({
    //     blikResult: !this.state.blikResult,
    //   })
    // }
  }
  // Funkcja obsługująca przycisk SAVE, waliduje formularz i zmieniająca stan saveForm
  handleSaveForm = () =>{
  // Aktualizacja state saveForm
    this.setState({
      saveForm: !this.state.saveForm,
    })
    
    // --Walidacja formularza--
    let cName = this.state.name;
    let cSurname = this.state.surname;
    let cPhoneNumber = this.state.phoneNumber;

    //

    // 1.
    // Sprawdzenie czy na początku inputa znajduje się spacja
    if(cName.indexOf(' ') === 0 || cSurname.indexOf(' ') === 0 || cPhoneNumber.indexOf(' ') === 0){
      console.log('Spacja jest na początku')
    }

    // 1.1
    // Sprawdzenie czy inpucie znajduje się spacja
    if(cName.includes(' ') || cSurname.includes(' ')){
      console.log("W środku jest spacja")
    }

    // 2.
    // Sprawdzenie czy imię i nazwisko zawiera cyfry
    if(cName.includes("1") || cName.includes("2") || cName.includes("3") ||
       cName.includes("4") || cName.includes("5") || cName.includes("6") ||
       cName.includes("7") || cName.includes("8") || cName.includes("9") || 
       cName.includes("0"))
    {
        console.log('Błąd - Znajduje się cyfra')
    }

    //3. 
    // Sprawdzenie czy wszystkie pola są uzupełnione
    if(this.state.place[0].isActive === true){

      if(this.state.name === '' || this.state.surname === '' || this.state.phoneNumber === ''){
        console.log('Formularz nie jest uzupełniony, proszę uzupełnić wszystkie pola')
      }else {
        console.log('Formularz poprawnie uzupełniony');
      }

    }else if(this.state.place[1].isActive === true){
      console.log('Home');
    }

    // 4.
    // Sprawdzenie czy w inpucie znajdują się tylko cyfry
    const regex = /[A-Za-z]/g;
    const found = cPhoneNumber.match(regex);
    if(found !== null && found.length > 0){
      console.log('Błąd - w numerze telefonu są litery');
    }else{
      console.log('Jest ok')
    }    
  }
  //Funkcja ustalająca godzinę dostawy (losowa wartość z przedziału od 15-45 min + obecny czas)
  handleExpectedDeliveryTime = ()=>{
    // losowa wartość dodana do aktualnego czasu (minut) zakres 15-55 min
    const randomExpectedDeliveryTime = Math.floor(Math.random() * 21) + 30;
    // console.log(randomExpectedDeliveryTime)

    let time = new Date();
    // Dzień typu Sun,Wed,Mon...
    let textDay = time+"";
    let weekDay = textDay.substring(0,4)
    let numnberWeekDay = textDay.substring(8,15)
    let allDate =`${weekDay}${numnberWeekDay}`;
    // console.log(weekDay)
    // console.log(numnberWeekDay)
    // console.log(allDate)
    this.setState({
      textDateForDelivery: allDate,
    })

    // Ustawienie godziny dostawy
    let actuallyHour = time.getHours();
    let actuallyMinutes = time.getMinutes();
    // minuty od 0-9 dodawane 0 przed cyfrą
    console.log(actuallyHour)
    // console.log(`PRZED: ${actuallyMinutes}`)
    if(actuallyMinutes < 10){
      actuallyMinutes = `${0}${actuallyMinutes}`
    }  
    if(actuallyHour < 10){
      actuallyHour = `${0}${actuallyHour}`
    }  
    console.log(`${actuallyHour}:${actuallyMinutes}`)
    // parsowanie w celu możliwości pracy na wartościach godziny i minut
    let parseMinute = parseInt(actuallyMinutes, 10);
    let parseHour = parseInt(actuallyHour, 10);
    let valueMinutes = randomExpectedDeliveryTime + parseMinute;
    console.log(`Value: ${valueMinutes}`)

    let restMinutes;
    let hour;
    
    // suma minut wynosi powyżej 60 -> dobicie do pełnej godziny = 60 min, a reszta z minut przeniosiona do kolejnej godziny
    if(valueMinutes >= 60){
      restMinutes = valueMinutes - 60;
      // console.log(`REST: ${restMinutes}`)
      hour = parseHour + 1;
      // minuty od 0-9 dodawane 0 przed cyfrą
      if(restMinutes < 10){
        restMinutes = `${0}${restMinutes}`
      }
    }else{
      // console.log(`ELSE  ${valueMinutes}`)
      restMinutes = valueMinutes
      hour = parseHour
    }
    // zmienna robiąca string z godziny i minut, aktualizacja state
    let fullHours = hour+":"+restMinutes;
    this.setState({
      deliveryTime: fullHours,
    })

  }
  // Funckaj PA zmienia isChangeStatus odblokowuje zmianę statusu zamówienia
  handleOpenStatus = (id) =>{
    const elements = this.state.orders.map(element =>{
      if(id === element.id){
        element.isChangeStatus = true;
         if(element.isChangeStatus === true && element.status < 4){
           console.log('Odblokowany status')
           element.status +=1
           if(element.status === 4){
  
             this.setState({
              isChangeStatus: false
             }) 
      
           }
           console.log(element.status)
         }
        //  if(element.status >= 5){
        //    console.log('Przejdź jako DONE')
        //    element.status =
        //    this.setState({
        //     isChangeStatus: false
        //    })
        //  }
      }
      return elements
    })
    this.setState({
      elements
})

  }
  handleChangeStatus =(id)=>{
    console.log(id)
  }
  // Funkcja zamyka podsumowanie
  handleCloseSummary = () =>{
    if(this.state.isSummaryOrder){
      this.setState({
        isSummaryOrder: false,

        meals: [
          {id:1, name: 'prosciutto Cotto',type: 'eat', price: 20, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne i szynką gotowaną', img:pizza2, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
          {id:2, name: 'margherita', type: 'eat', price: 10, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne i i świeżą bazylia', img:pizza3, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: true,},
          {id:3, name: 'salame Piccante', type: 'eat', price: 30, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne, pikantnym salami i czosnkiem', img:pizza4, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
          {id:4, name: 'Margherita di Bufala', type: 'eat', price: 10, description:'z pomidorami San Marzano D.O.P., mozzarellą z mleka bawolego i świeżą bazylią', img:pizza5, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: true,},
          {id:5, name: 'Nepoletana ', type: 'eat', price: 45, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne, po piecu: prosciutto crudo, rukola i parmezan', img:pizza1, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
          {id:6, name: 'Coca-cola', type: 'drink', price: 5, description:'słodki napój gazowany', img:coke, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
          {id:7, name: 'Sprite', type: 'drink', price: 10, description:'słodki napój gazowany o smaku limonki i cytryny', img:soda, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
          {id:8, name: 'Woda', type: 'drink', price: 12, description:'woda niegazowana', img:tea, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
          {id:9, name: 'Lemoniada', type: 'drink', price: 10, description:'lemoniada', img:coffee, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
        ],
        name: '',
        surname: '',
        phoneNumber: '',
        street: '',
        city: '',
        numberHome: '',
        time: '',
        date:'',
      })
      this.handleActionNotification()
    }
  }
  // Funkcja uruchamiająca historię zamówień
  handleOpenHistory = () =>{
    this.setState({
      isHistoryActive: true,
    })
  }
  // Funkcja zamyka historię zamówień
  handleCloseHistory = () =>{
    this.setState({
      isHistoryActive: false,
    })
  }
  // Stoliki w restauracji
  handleOpenTablesView = () =>{
    this.setState({
      isActiveTablesView: true,
    })
  }
  handleClosedTablesView = () =>{
    this.setState({
      isActiveTablesView: false,
    })
  }
  // Zaznaczenie stolika
  handleCheckedTable = (id) =>{
    console.log(id)
    const checkedTable = this.state.tables.map(item =>{
      if(id === item.id){
        item.isChecked = !item.isChecked;
        this.setState({
          chooseTable: item.id,
        })
      }else{
        item.isChecked = false;
      }
      const element = item.isChecked;
      return element;
    })
    this.setState({
      checkedTable
    })
    console.log(checkedTable)
  }
  // handleCheckedMeal = (id) =>{
  //   const checkedMeals = this.state.meals.map(item => {
  //     if(id === item.id){
  //         item.isChecked = !item.isChecked
  //     }
  //     const element = item.isChecked
  //     return element
  //   })
    
  //   this.setState({
  //     checkedMeals,
  //   })
// Powiadomienia akcji
  handleActionNotification = () =>{
    console.log(this.state.notifications)
    console.log(this.state.obj)
    let arrayNotification = this.state.notifications;
    // Dodanie obiektu do tablicy notifiactions
    arrayNotification.push(this.state.obj)
    console.log(arrayNotification)
    
      this.setState({
        obj:{
          id: '',
          clientId: '',
          text: '',
        },
        // counterId: this.state.counterId+1,
      })

  }
  // Czas aktualny
  handleCurrentTime = () =>{
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    
    let time = hour + ":" + minutes;

    if(hour < 10 ){
        hour = `${0}${hour}`
        time = hour + ":" + minutes;
        this.setState({
          currentTime: time,
      })
        if(minutes < 10){
            minutes = `${0}${minutes}`
            time = hour + ":" + minutes;
            this.setState({
            currentTime: time,
        })
      }  
    } 
    // console.log(hour)
    // console.log(minutes)
    this.setState({
      currentTime: time,
    })


  }
  // Przełącznik aktywnego statusu w panelu sterowania administratora
  handleChangeActiveStatusForAdministratorPanel = (e) =>{
    // console.log(e.target.id)
    if(e.target.id === '1'){
      this.setState({
        activeStatusForPanelAdministrator: '1',
      })
      console.log(e.target.id)
    }  
    if(e.target.id === '2'){
      this.setState({
        activeStatusForPanelAdministrator: '2',
      })
      console.log(e.target.id)
    }  
    if(e.target.id === '3'){
      this.setState({
        activeStatusForPanelAdministrator: '3',
      })
    }  
    if(e.target.id === '4'){
      this.setState({
        activeStatusForPanelAdministrator: '4',
      })
    }  
    if(e.target.id === '5'){
      this.setState({
        activeStatusForPanelAdministrator: '5',
      })
    }  
    // if(e.target.id === 1){
    //   this.setState({
    //     activeStatusForPanelAdministrator: 1,
    //   })
    // }  
    // if(e.target.id === 1){
    //   this.setState({
    //     activeStatusForPanelAdministrator: 1,
    //   })
    // }  
  }
  handleLogOut = () =>{
    console.log('Wyloguj')
    this.setState({
          // false default
    administrator: false,
    //  false default pominięcie logowania
    client: false,
    // defaultowo loginName oraz loginPassword puste powinno być
    loginName:'admin',
    loginPassword:'123qwe',
    // To id powinno być '', na czas pisania aplikacji default np. 1
    clientId:1,
    // false default
    isCorrectLogin: false,
    // false default
    isCorrectPassword: false,
    // false default
    adminPanel: false,
    // rejestracja użytkownika
    isRegister: false,

    // account:[
    //   {id:1, login: 'admin', password: '123qwe'},
    //   {id:2, clientId:1, login: 'jkowalski', password: '123qwe'},
    //   {id:3, clientId:2, login: 'pnowak', password: '123qwe'},
    //   {id:4, clientId:3, login: 'jkret', password: '123qwe'},
    // ],

    // Powiadomienia nie mogą być kasowane po zmianie klient -> admin
    // notifications:[
    //   {id: 0, clientId: 1, text: 'Twoje zamówienie zostało opłacone', currentTime:'10:20' },
    //   {id: 1, clientId: 1, text: 'Twoje zamówienie zostało opłacone', currentTime:'13:10' },
    // ],

    textNotification: '',
    // Counter ustawiony ma być w zależności ile domyślnie bedzie obiektów w notifications
    counterId:2,
    // powiadomienia
    isShowNotification: false,
    counterNotification: 0,
    blikNotifications: false,
    resetBlikCode: false,
    obj: {id:'', clientId: '', text: '',},
    // logowanie
    activeUserLogin: '',
    activeUserPassword: '',
    adminActive: false,
    userAccountActive: false,
    userNoAccountActive: false,
    isProfileSettingsActive: false,
    isActiveScreen: false,
    isActiveSearch: false,
    isYourOrder: false,
    activeYourOrder: false,
    isActiveAllFoods: false,

    meals: [
      {id:1, name: 'Prosciutto Cotto',type: 'eat', price: 20, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne i szynką gotowaną', img:pizza2, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:2, name: 'Margherita', type: 'eat', price: 10, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne i i świeżą bazylia', img:pizza3, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: true,},
      {id:3, name: 'Salame Piccante', type: 'eat', price: 30, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne, pikantnym salami i czosnkiem', img:pizza4, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:4, name: 'Margherita di Bufala', type: 'eat', price: 10, description:'z pomidorami San Marzano D.O.P., mozzarellą z mleka bawolego i świeżą bazylią', img:pizza5, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: true,},
      {id:5, name: 'Nepoletana', type: 'eat', price: 45, description:'z pomidorami San Marzano D.O.P., mozzarellą Julienne, po piecu: prosciutto crudo, rukola i parmezan', img:pizza1, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:6, name: 'Coca-cola', type: 'drink', price: 5, description:'słodki napój gazowany', img:coke, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:7, name: 'Sprite', type: 'drink', price: 10, description:'słodki napój gazowany o smaku limonki i cytryny', img:soda, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:8, name: 'Woda', type: 'drink', price: 12, description:'woda niegazowana', img:tea, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
      {id:9, name: 'Lemoniada', type: 'drink', price: 10, description:'lemoniada', img:coffee, showInfoMeal: false, showInfoFromSearch:false, number:1, isChecked: false, isVege: false,},
    ],

    // orders:[
    //   {id:1, name: 'jeden',place:'W restauracji', tableNumber:2, price: 20, number: 2, clientId: 1,  dateOfRelease:'Tue 28 2022', timeOfRelease:'18:20', status: '0', isChangeStatus:false, city: '', street:'', homeNumber: ''},
    //   {id:2, name: 'dwa', place:'W restauracji', tableNumber:2, price: 10, number: 2, clientId: 1,  dateOfRelease:'Wed 29 2022', timeOfRelease:'18:25', status: '1', isChangeStatus:false, city: '', street:'', homeNumber: ''},
    //   {id:3, name: 'trzy', place:'Dostawa', tableNumber:null, price: 30, number: 2, clientId: 2,  dateOfRelease:'Tue 28 2022', timeOfRelease:'17:30', status: '2', isChangeStatus:false, city: 'Kraków', street:'Krakowska', homeNumber: '13'},
    //   {id:4, name: 'cztery', place:'W restauracji', tableNumber:9, price: 10, number: 2, clientId: 3, dateOfRelease:'Tue 28 2022', timeOfRelease:'18:05', status: '3', isChangeStatus:false, city: '', street:'', homeNumber: ''},
    //   // {id:5, name: 'pięć', place:'W restauracji', tableNumber:1, price: 10, number: 2, clientId: 3, dateOfRelease:'Tue 28 2022', timeOfRelease:'10:05', status: 4, isChangeStatus:false,},
    // ],

    typeMeal: false,

    // place: [
    //   {id:1, place:'W restauracji', isActive: true,},
    //   {id:2, place:'W domu',isActive: false,},
    // ],

    // tables:[
    //   {id:1, isChecked: false},
    //   {id:2, isChecked: false},
    //   {id:3, isChecked: false},
    //   {id:4, isChecked: false},
    //   {id:5, isChecked: false},
    //   {id:6, isChecked: false},
    //   {id:7, isChecked: false},
    //   {id:8, isChecked: false},
    //   {id:9, isChecked: false},
    //   {id:10, isChecked: false},
    // ],

    chooseTable: '',

    // paymentMethod:[
    //   {id:1, methods: 'Płatność Blik', isActive: true, },
    //   {id:2, methods: 'Płatność na miejscu', isActive: false, }
    // ],

    // formularz danych osobowych 
    name: '',
    surname: '',
    phoneNumber: '',
    street: '',
    city: '',
    numberHome: '',
    date: '',
    time: '',
    freeTable: 10,
    firstBlikNumber:'',
    secondBlikNumber:'',
    thirdBlikNumber:'',
    fourthBlikNumber:'',
    randomBlikGenerateCode:'',
    blikCode:'',
    isActiveBlikCode: false,
    timerValue:5,
    showBlikContent: false,
    blikResult:false,
    saveForm: false,
    searchMeal:'',
    deliveryTime: '',
    randomDeliveryTime: 0,
    textDateForDelivery:'',
    isChangeStatus: false,
    currentTime: '',
    activeStatusForPanelAdministrator: '1',
    // Pokazanie podsumowania zamówienia
    isSummaryOrder: false,
    isClosedSummary: false,
    // historia zamówień na profilu
    isHistoryActive: false,
    // Stoliki
    isActiveTablesView: false,
    })
  }
  componentDidMount = ()=>{
    this.handleExpectedDeliveryTime();
    // uruchamiane dla aktualnej godziny powiadomień
    this.handleCurrentTime();
    // this.handleActionNotification();
  }

  render() {
    return (
      <>
      
      <div className={this.state.client=== true || this.state.administrator ? "container-choice-user--active-client" : "container-choice-user container" }>
        <div className='user-panel'>
          {/* <div className='col-12 logo-restaurant'>Restaurant</div> */}
          <LoginPanel
            handleChoiceAdmin= {this.handleChoiceAdmin}
            handleChoiceClient= {this.handleChoiceClient}
            handleLoginNoneAccount={this.handleLoginNoneAccount}
            handleRegisterProfile={this.handleRegisterProfile}
            isRegister={this.state.isRegister}
            handleBackFromRegister={this.handleBackFromRegister}
            handleChangeInputLogin={this.handleChangeInputLogin}
            handleLoginProfile={this.handleLoginProfile}
            
          />
          {/* <div className='user-choice'>
            <div className='col-5 user-choice__admin' onClick={this.handleChoiceAdmin}>Administrator</div>
            <div className='col-5 user-choice__client' onClick={this.handleChoiceClient}>Klient bez logowania</div>
          </div> */}
        </div>
      </div>
      {/* Wybór klienta */}
      {this.state.client ?       
      <div className={this.state.activeYourOrder ? "App background-app" : "App background-app"}>
        <div className="welcome-user">
          <div className="col-12 welcome-user__text" >
            Witaj w aplikacji!
            <div>Dotknij ekranu, aby rozpocząć</div>
          </div>
        </div>
            <div className="icon-touch" onClick={this.handleStartApp}>
              <img  src={clickpng} alt="touch-screen"/>
            </div>
            {this.state.isActiveScreen ? 
              <Home 
                meals={this.state.meals} 
                place={this.state.place} 
                changePlaceActive={this.handleChangePlaceActive}
                handleChange={this.handleChangeInput} 
                activeUserLogin={this.state.activeUserLogin}
                formOrder={this.state.formOrder} 
                handleDateValue={this.handleDateValue} 
                date={this.state.date}
                time={this.state.time}
                table={this.state.freeTable}
                vege={this.handleChangeIsVege}
                typeMeal={this.state.typeMeal}
                changeSearch={this.handleChangeSearch}
                activeSearch={this.state.isActiveSearch}
                yourOrder={this.state.isYourOrder}
                activeYourOrder={this.state.activeYourOrder}
                changeActiveYourOrder={this.handleChangeActiveYourOrder}
                nameClient={this.state.name}
                surnameClient={this.state.surname}
                phoneNumberClient={this.state.phoneNumber}
                cityClient={this.state.city}
                streetClient={this.state.street}
                homeClient={this.state.numberHome}
                changeActiveAllFoods={this.handleChangeActiveAllFoods}
                allFoods={this.state.isActiveAllFoods}
                addNumberMeal={this.handleAddNumberMeal}
                substractNumberMeal={this.handleSubstractNumberMeal}
                checkedMeal={this.handleCheckedMeal}
                paymentMethod={this.state.paymentMethod}
                changePayments={this.handleChangePayments}
                handleBlikCode={this.handleBlikCode}
                handleChangeInputBlikCode={this.handleChangeInputBlikCode}
                firstBlikNumber={this.state.firstBlikNumber}
                secondBlikNumber={this.state.secondBlikNumber}
                thirdBlikNumber={this.state.thirdBlikNumber}
                fourthBlikNumber={this.state.fourthBlikNumber}
                randomBlikCode={this.state.randomBlikGenerateCode}
                sendBlikCode={this.sendBlikCode}
                isActiveBlikCode={this.state.isActiveBlikCode}
                timerValue={this.state.timerValue}
                showBlikContent={this.state.showBlikContent}
                handleShowInfoAboutMeal={this.handleShowInfoAboutMeal}
                blikResult={this.state.blikResult}
                saveForm={this.state.saveForm}
                handleSaveForm={this.handleSaveForm}
                searchMeal={this.state.searchMeal}
                startSearch={this.handleStartSearch}
                handleShowInfoAboutMealFromSearch={this.handleShowInfoAboutMealFromSearch}
                deliveryTime={this.state.deliveryTime}
                textDateForDelivery={this.state.textDateForDelivery}
                isProfileSettingsActive={this.state.isProfileSettingsActive}
                handleProfileSettingActive={this.handleProfileSettingActive}
                handleShowNotificationContent={this.handleShowNotificationContent}
                isShowNotification={this.state.isShowNotification}
                counterNotification={this.state.counterNotification}
                handleCloseNotification={this.handleCloseNotification}
                randomBlikGenerateCode={this.state.randomBlikGenerateCode}
                blikNotifications={this.state.blikNotifications}
                handleCloseBlikNotification={this.handleCloseBlikNotification}
                resetBlikCode={this.resetBlikCode}
                handleCloseSummary={this.handleCloseSummary}
                isSummaryOrder={this.state.isSummaryOrder}
                orders={this.state.orders}
                clientId={this.state.clientId}
                isHistoryActive={this.state.isHistoryActive}
                handleOpenHistory={this.handleOpenHistory}
                handleCloseHistory={this.handleCloseHistory}
                tables={this.state.tables}
                handleOpenTablesView={this.handleOpenTablesView}
                isActiveTablesView={this.state.isActiveTablesView}
                handleClosedTablesView={this.handleClosedTablesView}
                handleCheckedTable={this.handleCheckedTable}
                chooseTable={this.state.chooseTable}
                notifications={this.state.notifications}
                textNotification={this.state.textNotification}
                handleActionNotification={this.handleActionNotification}
                numberHome={this.state.numberHome}
                city={this.state.city}
                street={this.state.street}
                handleLogOut={this.handleLogOut}
                
              /> : null}
              
            
      </div> : null }
      
      {this.state.administrator ? 
        <div className={this.state.adminPanel ? 'login-page--no-active' : 'container login-page'}>
          <div className='col-12 header-container-login'>
            <button onClick={this.handleBackToProfiles} className='button-back-login'>Back</button>
            <div className='login-text--head'>Log In</div>
          </div>
          <div className='col-12 login-container'>
            <div className='login-center'>
              <div className='login-text'>Name</div>
              <input name="login" onChange={this.handleLoginAccount} className='input-login' type="text" />
              <div className='login-text'>Password</div>
              <input type="password" name='pass'  onChange={this.handleLoginAccount} className='input-login'  />
              <div className='col-12 container-button-login'>
                <button onClick={this.handleLogIn} className='button-login'>Log In</button>
                <div className='login-text--forgot-password'>Forgot your password?
                  <div className='login-text'>Click here</div>
                </div>
              </div>
            </div>
          </div>
          
        </div> : null}
        {this.state.adminPanel ? 
          <AdministratorPanel  
            orders={this.state.orders} 
            handleOpenStatus={this.handleOpenStatus} 
            handleChangeActiveStatusForAdministratorPanel={this.handleChangeActiveStatusForAdministratorPanel}
            activeStatusForPanelAdministrator={this.state.activeStatusForPanelAdministrator}
            handleLogOut={this.handleLogOut}
          /> 
          : null }
      {/* <div>Panel admin
        <div>
          <inuput></inuput>
          <inuput></inuput>
          <button>OK</button>
        </div>
      </div> */}


      {/* <div className={this.state.activeYourOrder ? "App background-app" : "App background-app"}>
        <div className="welcome-user">
          <div className="col-12 welcome-user__text" >
            Welcome to app!
            <div>Touch screen to start</div>
          </div>
        </div>
            <div className="icon-touch" onClick={this.handleStartApp}>
              <img  src={clickpng} alt="touch-screen"/>
            </div>
            {this.state.isActiveScreen ? 
              <Home 
                meals={this.state.meals} 
                place={this.state.place} 
                changePlaceActive={this.handleChangePlaceActive}
                handleChange={this.handleChangeInput} 
                formOrder={this.state.formOrder} 
                handleDateValue={this.handleDateValue} 
                date={this.state.date}
                time={this.state.time}
                table={this.state.freeTable}
                vege={this.handleChangeIsVege}
                typeMeal={this.state.typeMeal}
                changeSearch={this.handleChangeSearch}
                activeSearch={this.state.isActiveSearch}
                yourOrder={this.state.isYourOrder}
                activeYourOrder={this.state.activeYourOrder}
                changeActiveYourOrder={this.handleChangeActiveYourOrder}
                nameClient={this.state.name}
                surnameClient={this.state.surname}
                phoneNumberClient={this.state.phoneNumber}
                cityClient={this.state.city}
                streetClient={this.state.street}
                homeClient={this.state.numberHome}
                changeActiveAllFoods={this.handleChangeActiveAllFoods}
                allFoods={this.state.isActiveAllFoods}
                addNumberMeal={this.handleAddNumberMeal}
                substractNumberMeal={this.handleSubstractNumberMeal}
                checkedMeal={this.handleCheckedMeal}
                paymentMethod={this.state.paymentMethod}
                changePayments={this.handleChangePayments}
                handleBlikCode={this.handleBlikCode}
                handleChangeInputBlikCode={this.handleChangeInputBlikCode}
                firstBlikNumber={this.state.firstBlikNumber}
                secondBlikNumber={this.state.secondBlikNumber}
                thirdBlikNumber={this.state.thirdBlikNumber}
                fourthBlikNumber={this.state.fourthBlikNumber}
                randomBlikCode={this.state.randomBlikGenerateCode}
                sendBlikCode={this.sendBlikCode}
                isActiveBlikCode={this.state.isActiveBlikCode}
                timerValue={this.state.timerValue}
                showBlikContent={this.state.showBlikContent}
                handleShowInfoAboutMeal={this.handleShowInfoAboutMeal}
                blikResult={this.state.blikResult}
                saveForm={this.state.saveForm}
                handleSaveForm={this.handleSaveForm}
                searchMeal={this.state.searchMeal}
                startSearch={this.handleStartSearch}
                handleShowInfoAboutMealFromSearch={this.handleShowInfoAboutMealFromSearch}
                deliveryTime={this.state.deliveryTime}
                textDateForDelivery={this.state.textDateForDelivery}
              /> : null}
            
      </div> */}
      </>
    );
  }
}

export default App;
