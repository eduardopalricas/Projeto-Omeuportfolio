class SecundaryHeader extends HTMLElement {
  constructor(){
    super()

    const shadow = this.attachShadow({mode: 'open'})

    shadow.innerHTML = `
    <header> 
    <h1 id="name"><a href="../index.html"><img src="../images/arrowleft.png" alt="Imagem de uma seta para a esquerda" id="arrowleft"></a> Eduardo Cardoso</h1>
    <iframe src="../Socialmedia/socialmedia.html" frameborder="0" id="socialmedia"></iframe>     
  </header>
  `
  const style = document.createElement('style')
  style.textContent = `
    
  header{
    height: 15vh;
    background-color: var(--corfundodestaque);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 4px #6891e27c;
  }
  
  
  #arrowleft{
    width: 40px;
    height: 40px;
    margin-left:calc(2vw + 10px);
    margin-right:calc(2vw + 10px);
  }
  
  
  h1{
    display: flex;
    align-items: center;
  }
  
  a{
    height: 15vh;
    display: flex;
    align-items: center;
  }
  
  
  #socialmedia{
    height: 15vh;
    margin: 0px calc(2vw + 10px);
    width: 250px;
  }
  
  
  #name{
    font-family: var(--letranome);
    color: var(--cortitulo);
    font-size: 40px;
  }`

  shadow.appendChild(style)      
  }
}

customElements.define('my-header', SecundaryHeader)