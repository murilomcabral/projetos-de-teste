// function elementFromHtml(html) {
//    const template = document.createElement('template');
//    template.innerHTML = html.trim();

//    return template.content.firstElementChild;
// }

// const myHeader = elementFromHtml(`
//        <header  header class="">
//          <nav>
//             <ul id="navBar" style="display: none;">
//                <li><a href="index.html">Início</a></li>
//                <li><a href="sobre.html">Sobre</a></li>
//                <li><a href="#">Conhecimentos</a></li>
//                <li><a href="#">Projetos</a></li>
//                <li><a href="#">Contato</a></li>
//             </ul>
//          </nav>
//          <div id="navHamb" onclick="navOpenClose()">
//             <span id="lin1" class=""></span>
//             <span id="lin2" class=""></span>
//             <span id="lin3" class=""></span>
//          </div>
//          <button id="fontSizeDecrease" onclick="fontDec()">&minus;</button>
//          <button id="fontSizeNormal" onclick="fontNor()">•</button>
//          <button id="fontSizeIncrease" onclick="fontInc()">&plus;</button>
//       </header>
// `);

// document.body.appendChild(myHeader);

// class myHeader extends HTMLElement {
//    connectedCallback() { 
//       this.innerHTML = `
//       <header class="">
//       <nav>
//          <ul id="navBar" style="display: none;">
//             <li><a href="index.html">Início</a></li>
//             <li><a href="sobre.html">Sobre</a></li>
//             <li><a href="#">Conhecimentos</a></li>
//             <li><a href="#">Projetos</a></li>
//             <li><a href="#">Contato</a></li>
//          </ul>
//       </nav>
//       <div id="navHamb" onclick="navOpenClose()">
//          <span id="lin1" class=""></span>
//          <span id="lin2" class=""></span>
//          <span id="lin3" class=""></span>
//       </div>
//       <button id="fontSizeDecrease" onclick="fontDec()">&minus;</button>
//       <button id="fontSizeNormal" onclick="fontNor()">•</button>
//       <button id="fontSizeIncrease" onclick="fontInc()">&plus;</button>
//    </header>
//    `
//    }
// }
// customElements.define('myHeader', myHeader);