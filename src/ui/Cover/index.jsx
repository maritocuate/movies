import './styles.scss'

export function Cover ({ image, title, description }) {
  return (
    <div className='cover'>
      <img
        className="cover__img"
        src={image}
        alt='title'
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = '../images/default.jpg'
        }}
      />
      <div className="movie-info">
        <h3 className="movie-info__title">{title}</h3>
        <span className='movie-info__description'>
          {description}
        </span>
      </div>
    </div>
  )
}
