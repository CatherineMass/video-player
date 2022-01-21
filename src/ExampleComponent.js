const ExampleComponent = () => {
    // hardcoded value of a youtube VideoID (this is just for illustration)
    // Take note of how the template literal is being used.
    const hardcodedYoutubeVideoId = "pJuq8D1NGJQ";
    return <iframe 
        width="500" height="300" 
        src={`https://www.youtube.com/embed/${hardcodedYoutubeVideoId}`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>     
}

export default ExampleComponent;