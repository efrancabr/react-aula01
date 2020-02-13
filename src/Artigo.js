import React from "react"
import naruto from './img/naruto.png';
import coringa from './img/coringa.png';
import homemaranha from './img/homem-aranha.png';

export const Artigo = () => (

    <article> 

        <table className="App-tabela" >
            <tr className=".App-tabela-linha" >
                <td> <img src={naruto} alt="Imagem personagem Naruto" height="150" width="150" align="left"  ></img>  </td>
                <td>   
                    <p> 
                    Naruto (ナルト?) é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila. A história é dividida em duas partes, a primeira parte se passa nos anos da pré-adolescência de Naruto, e a segunda parte se passa em sua adolescência. A série é baseada em dois mangás one-shots de Kishimoto: Karakuri (1995), e que por causa dele Kishimoto ganhou uma menção honrosa no prêmio Hop Step da Shueisha no ano seguinte, e Naruto (1997). A editora Panini Comics licenciou e publicou o mangá em três versões no Brasil, e em Portugal é a editora Devir Manga quem licencia e publica o mangá. A história de Naruto continua com o seu filho, Boruto Uzumaki em Boruto: Naruto Next Generations.
                    </p>

                </td>
            </tr>
            <tr className=".App-tabela-linha"  >
                <td> <img src={coringa} alt="Imagem personagem Coringa" height="150" width="150" align="left"  ></img> </td>
                <td>
                    <p> 
                    Joker (no Brasil, Coringa) é um filme de suspense psicológico estadunidense de 2019, dirigido por Todd Phillips, que co-escreveu o roteiro com Scott Silver. Baseado no personagem de mesmo nome da DC Comics, o filme é estrelado por Joaquin Phoenix como o Coringa. Joker é ambientado em 1981 e segue Arthur Fleck, um comediante de stand-up fracassado que é levado à loucura e se envolve em uma vida de crimes e caos em Gotham City. Robert De Niro, Zazie Beetz, Frances Conroy, Brett Cullen, Marc Maron, Bill Camp, Shea Whigham, Glenn Fleshler, Douglas Hodge e Brian Tyree Henry, entre outros, aparecem em papéis coadjuvantes. Produzido pela Village Roadshow Pictures, DC Films, Sikelia Productions, Joint Effort Productions e Green Hat Films e distribuído pela Warner Bros. Pictures, faz parte da DC Black, uma série de filmes baseados nos personagens da DC separados do Universo Estendido DC. Não há relação com as outras versões do personagem vistas anteriormente no cinema.[4]
                    </p>
                </td>
            </tr>
            <tr className=".App-tabela-linha" >
                <td> <img src={homemaranha} alt="Imagem personagem Homem Aranha" height="150" width="150" align="left" ></img> </td>
                <td>
                O Homem-Aranha (Spider-Man no original em inglês) alter-ego de Peter Parker, é um personagem fictício, um super-herói que aparece nas revistas em quadrinhos (banda desenhada em Portugal) americanas publicadas pela Marvel Comics, existindo no seu universo partilhado. O Homem-Aranha foi criado pelo editor/escritor Stan Lee e pelo escritor/artista Steve Ditko, e a sua primeira aparição foi no livro de antologia Amazing Fantasy #15 (Agosto de 1962), durante a Era de Prata da banda desenhada. Lee e Ditko conceberam o personagem como um órfão, que foi educado e criado pela sua Tia May e o seu Tio Ben em Nova Iorque, e, enquanto adolescente, tem de lidar com as lutas diárias normais da sua idade, em adição àquelas que tem como combatente do crime mascarado. Para combater os seus inimigos, os criadores deram-lhe super força e agilidade, a habilidade de conseguir aderir na maior parte das superfícies, a possibilidade de disparar teias de aranha através de mecanismos montados nos pulsos (inventados por ele próprio, a que ele chama "lança-teia" - "web-shooters") e consegue reagir precognitivamente ao perigo com o seu "sentido-aranha" ("spider-sense"). Os seus poderes foram adquiridos após ter sido mordido por uma aranha radioativa.
                </td>
            </tr>
        </table>

    </article>


);
