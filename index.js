var container = document.getElementById("app");
//var titulo=document.createElement("h1")
//titulo.innerHTML="Título inserido por JS :o"
//container.appendChild(titulo)




function Contador(props){
    //let numero=0;
    const[numero,setNumero]=React.useState(0);//o primeiro estado dele é 0, ou seja, é esperado que mude esse valor

    function somar(){
        setNumero(numero+1);
        //numero++; nao pode usar pq ele redefine o valor da variavel tipo numero=numero+1
        console.log("somei e ficou: "+ numero)
    }

    function subtrair(){
        setNumero(numero-1);
        //numero--;
        console.log("subtrai e ficou: "+numero)
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar} >+</button>
            <button onClick={subtrair} >-</button>
        </React.Fragment>
    );
}


function Copo(){
    return (
        <React.Fragment>
            <img  src="https://thumbs.dreamstime.com/b/%C3%ADcone-de-vidro-meio-cheio-e-vazio-ilustra%C3%A7%C3%A3o-linha-vetorial-isolada-em-fundo-branco-163823427.jpg"></img>
        </React.Fragment>
        );
}

function App( ){//<    />self-close
    return (
        <React.Fragment>
            <h1>O copo está: </h1>
            <Copo></Copo>
            <Contador titulo="Meio cheio" />   
            <Contador titulo="Meio vazio" />
        </React.Fragment>
    );
}



//props são as propriedades do Componente App
ReactDOM.render(React.createElement(App,null,null),container);
//ReactDOM.render(App(),container);

//1.PascalCase -> Componentes em React seguem esse padrão
//2.camelCase->Funções em JavaScript
//3.Componentes só podem retornar um elemento por componente
//saída->aninhar em React.Fragment
//4.Podemos criar propriedades para nossos COmponentes(props)
// pra não ter que ficar criando divs usa o fragment