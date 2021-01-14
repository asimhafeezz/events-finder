
interface ImageSliderProps {
    images: {
        url: string
    }[]
}

export const ImageSlider: React.FC<ImageSliderProps> = ({images}) => {
  return (
    <div className="image-slider">
        {
            images.map(({url} , i) => (
        <section key={i} style={{minWidth: '300px'}}>
            <img src={url} alt="images" />
        </section>
            ))
        }
    </div>
  );
}