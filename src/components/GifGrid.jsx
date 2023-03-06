import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({category}) => {

const {images, isLoading} = useFetchGifs(category);


//!TAMBIEN SE PUEDE PONER EN UNA FUNCION CON ASYNC Y AWAY
  /*const nuevasImagenes = async () =>{

    const gifs = await getGift(category);
  setimages(gifs);
  }*/
//! O TAMBIEN SE PUEDE HACER ASÍ
  // useEffect(() => {

  //   getGift(category)
  //   .then(gifs => {

  //     setimages(gifs)
  //   });

  // }, [])

  return (
    <>
        <h3>{category}</h3>

        {
          //! Se puede poner este condicional diciendole que si está true que ponga el h2 y si no que no ponga nada 
          isLoading && <h2>Cargando...</h2>

          //! O también se podría poner con un condicional:
          //*isLoading ? ( <h2>Cargando...</h2>) : null
          //! Pero también se puede hacer mediante un componente react pero no le veo mucho sentido para poner o no ese componente:
          //*<isLoadingComponent isLoading = {isLoading} />
        }

        <div className="card-grid">
          {
          images.map((gif) => {
             return <GifGridItem key={gif.id}
             {...gif}
             
             />
           })
          }
        </div>

    </>
  )
}
