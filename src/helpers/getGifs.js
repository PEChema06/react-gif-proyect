export const getGift = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=VJiGOAtkCfP4jwlW0CIZm5s52BLAj5PE&q=${category}&limit=10`;
    const resp = await fetch(url);
    //Aquí cogemos el valor data: y lo pasamos a json
    const {data} = await resp.json();
    //Cogemos el json data y extraemos los datos que nos interesan
    const gifs = data.map(datos =>(
        {
            id: datos.id,
            title: datos.title,
            url: datos.images.downsized_medium.url
        }
    ))

    return gifs;
}
