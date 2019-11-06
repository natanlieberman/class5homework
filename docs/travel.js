console.log('travel start')
let db = {
    destenations: null,
    travels: null
}

try {
    let destenatiosn = [
        { code: 1, name: 'England', price: 1000 },
        { code: 2, name: 'America', price: 2000 },
        { code: 3, name: 'Spain', price: 700 },
        { code: 4, name: 'Ciperus', price: 200 },
    ]
    let tDest = document.querySelector('.allTraveles tbody')
    let destTemplate = '<tr><td>#code</td><td>#name</td><td>#price</td></tr>'
    let destRowsHtml = ''
    destenatiosn.forEach(destItem => {
        destRowsHtml += destTemplate
            .replace('#code', destItem.code)
            .replace('#name', destItem.name)
            .replace('#price', destItem.price)
    })
    tDest.innerHTML = destRowsHtml
    db.destenations = destenatiosn;

    console.log('poulate orders');

    let costumerArr = []
    let userArr = []
    let placeArr = []
 
    function orders() {
        console.log('orders started')
        const order = {
            name: document.getElementById('name').value,
            pi: document.getElementById('pi').value,
            ti: document.getElementById('ti').value,
            pas: document.getElementById('pas').value
        }
        console.log('order:', order)

        let costumer = document.querySelector('#costumerList')
        let data = '<tr><td>#total</td><td>#pas</td><td>#tn</td><td>#pi</td><td>#name</td><td>#ti</td></tr>'

        let foundOrder = destenatiosn.find(element => element.code == order.ti);

        let cData = data.replace('#total', foundOrder.price * order.pas)
            .replace('#pas', order.pas)
            .replace('#tn', foundOrder.name)
            .replace('#pi', order.pi)
            .replace('#name', order.name)
            .replace('#ti', order.ti)

        const finishedOrder = {
            name: order.name,
            personalID: order.pi,
            destination: foundOrder.name,
            passengersNumber: order.pas,
            total: foundOrder.price * order.pas,
            travelID: order.ti
        }

        costumerArr.push(finishedOrder)
        console.log(foundOrder)
        console.log('costumerArr:', costumerArr)
        costumer.innerHTML += cData
        console.log('orders finish')
    }
    function finedCostumer() {
        console.log('finedCostumer started')
        let costumerSerch = document.getElementById('findName').value
        console.log('serching for: ', costumerSerch)
        const finishSearch = costumerArr.forEach(element => {
            if (costumerSerch == element.name) {
                userArr.push(element)
            }
        })

        let userFinded
        let userTable = document.querySelector('#myOrders')
        let usreData = '<tr><td>#total</td><td>#pas</td><td>#tn</td><td>#pi</td><td>#name</td><td>#ti</td></tr>'
        costumerArr.forEach(userOrder => {
            userOrder
            userFinded = usreData.replace('#total', userOrder.total)
                .replace('#pas', userOrder.passengersNumber)
                .replace('#tn', userOrder.destination)
                .replace('#pi', userOrder.personalID)
                .replace('#name', userOrder.name)
                .replace('#ti', userOrder.travelID)
            userTable.innerHTML += userFinded
        });
    }

    function searchPlace() {
        let placeID = document.getElementById('place');
        let thePlace = placeID.options[placeID.selectedIndex].text;
        console.log('searchPlace started', thePlace)
        costumerArr.forEach(element => {
            if (thePlace == element.destination) {
                placeArr.push(element)
                console.log(placeArr)
            }
        })
        let mySearch
        let myTable = document.querySelector('#mySerches')
        let myData = '<tr><td>#total</td><td>#pas</td><td>#tn</td><td>#pi</td><td>#name</td><td>#ti</td></tr>'
        placeArr.forEach(element =>{
            mySearch = myData.replace('#total', element.total)
            .replace('#pas', element.passengersNumber)
            .replace('#tn', element.destination)
            .replace('#pi', element.personalID)
            .replace('#name', element.name)
            .replace('#ti', element.travelID)
        myTable.innerHTML += mySearch
        })
    }
} catch (error) {
    console.error('travel app error', error)
}

