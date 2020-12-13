import './styles/style.css'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello Vite!</h1>
    <h2>点击上面标题</h2>
  </div>
`

document.getElementsByTagName('h1')[0].onclick = () => {
  document.getElementsByTagName('h2')[0].innerText = "现在时间: " + new Date().toLocaleTimeString()
}
