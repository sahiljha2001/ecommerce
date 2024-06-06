const Error404Screen = {
  render: () => {
    return `<div id="container" class="error-container">
      <h1>Oops! Page not found</h1>
      <img src="../images/404-image.svg" alt="404 image" />
      <h2>We can't find the page you're looking for!</h2>
      <div class="btn">
      <a href="/#/"><button class="button" >Go Back Home</button><a/>
        
      </div>
    </div>`;
  },
};

export default Error404Screen;
