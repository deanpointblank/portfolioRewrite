const BlurbBox = (props) => {
  return(
    <section>
      <h3>{props.title || 'placeholder title'}</h3>
      <p>{props.blurb || 'placeholder blurb'}</p>
    </section>
  )
}

export default BlurbBox;