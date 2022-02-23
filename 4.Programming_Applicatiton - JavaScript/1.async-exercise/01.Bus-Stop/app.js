async function getInfo() {
    let stopNameDiv = document.querySelector('#stopName');
    let timeForBuses = document.querySelector('#buses');
    let idStop = document.querySelector('#stopId').value;

    let url = `http://localhost:3030/jsonstore/bus/businfo/${idStop}`;


    try {
        stopNameDiv.textContent = "Loading"
        timeForBuses.replaceChildren();
        let respond = await fetch(url);

        if (respond.status != 200) {
            throw new Error(`Stop ID not found`);
        }

        
        let information = await respond.json();

        stopNameDiv.textContent = information.name;


        Object.entries(information.buses).forEach(el => {
            let busNumber = el[0];
            let time = el[1];
            let listElement = document.createElement('li');
            listElement.textContent = `Bus ${busNumber} arrives in ${time} minutes`;

            timeForBuses.appendChild(listElement);
        });
    } catch (error) {
        stopNameDiv.textContent = 'Error';
    }
}