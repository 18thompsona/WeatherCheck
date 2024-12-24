const APIkey = "V58D47ZJ685BT4ZMU6TEU9R2H"
const APIpath = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

const WeatherAPI = (() => {
    function ProcessData(data){
        const location = data.resolvedAddress;
        const description = data.description;
        const temperature = data.currentConditions.temp;
    
        return { location, temperature, description};
    }

    async function GetData(city) {
        try{
            const response = await fetch(assemblePath(city));
            if (!response.ok){
                throw new Error(`City ${city} not found!`);
            }
            const RawData = await response.json();
            console.log(RawData);
            const data = ProcessData(RawData);
            return data;
        }
        catch(error){
            console.error(`The following issues happened: ${error}`);
            return null;
        }
    }

    function assemblePath(city){
        return `${APIpath}${city}?key=${APIkey}`;
        // return 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Edinboro?key=V58D47ZJ685BT4ZMU6TEU9R2H';
    }
    return {GetData};
})();

export default WeatherAPI;