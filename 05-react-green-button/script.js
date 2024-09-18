let buttonText = 'Click me'

const onButtonClick = () => {
    buttonText = 'Hello from Anton'
    console.log(buttonText)
}

const App = () => {
    return (
        <div className="app">
            <button onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(App)