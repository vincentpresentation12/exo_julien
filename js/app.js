/* 
Wait for DOM content
*/
document.addEventListener('DOMContentLoaded', () => {

    let mainSections = {
        'section-cours-list': document.querySelector('#section-cours-list'),
    }
let apiUrl = '';
const element = document.getElementsByTagName('button');
for(var i=0; i < element.length; i++){
    (function (index){
        element[index].addEventListener('click', function(){
            apiUrl = element[index].getAttribute('data-link');
            fetch(apiUrl)
            .then((response)=>response.text)
            .then(response => alert(response)
            )
                                    })
                                })(i);
                            }
    /* 
    # Mise en place d'un lecteur de support de cours
    L'exercice qui vous est proposé vas vous permettre de réaliser une WebApp qui affiche les supports de cours qui vous on été fourni lors de vos sessions. Les principes à mettre en place sont exactement les mêmes que ceux vue en cours, aucun piège dans cette exercice, il vous suffi d'être capable de répéter ce que vous avez vu en cours dans un cadre légèrement différent. Et en vous proposant de découvrir plus en profondeur le format Markdown. 
    
    Ce format est celui utilisé pour vos supports de cours, mais aussi pour les fichiers README que vous devez créer pour chacun de vos répetoires. Le principe de ce format est qu'il est facile a convertir dans d'autres formats, par exemple en HTML. Ce que vous allez devoir faire dans cet exercice et d'éxécuter une requête vers des fichier Markdown, pour les afficher en HTML dans votre page. Pour ce faire, vous avez pour commencer toutes les techniques vues en cours, puis le module Marked (https://www.npmjs.com/package/marked), qui est déja chargé dans le fichier 'index.html'. Afficher la page web dans votre navigateur et inspecté votre console, l'intéret du format Markdonw est la simplicité avec laquelle on peut le convertir.

    Prennez le temps de bien lire l'ennoné suivant, et bon courage!

    ## Liste des tâches :
    - Capter l'événement clic sur chaque bouton de la section 'section-courses-list'
    - Une fois l'événement capté, récupérer la valeur de la propriété 'data-link'
    - Utiliser la valeur de 'data-link' pour exécuter une requête HTTP afin de récupérer le contenu d'un support de cours
    - Une fois le contenu récupéré, créer une section dans le DOM pour l'afficher avec Marked
    */

    

    // Exemple d'utilisation du module Marked
    console.log( marked.parse("# Hello **markdown**, I am an H1 *markup*") );
})
