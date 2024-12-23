const APIkey = "V58D47ZJ685BT4ZMU6TEU9R2H"
const APIpath = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

let location = 'Edinboro'

export default weather (() => {
    function ProcessData(data){
        const {
            address: location,
            description: description,
            currentConditions: {temp: temperature}
        } = data;
        return {
            location, temperature, description
        }
    }

    async function GetData() {
        try{
            const response = await fetch(assemblePath());
            if (!response.ok){
                throw new Error("City not found!");
            }
            const data = await response.json();
            console.log(data);
            return data;
        }
        catch(error){
            console.log(`The following issues happened: ${error}`);
        }
    
    }

    function assemblePath(){
        return APIpath + location + '?key=' + APIkey;
    }
})();