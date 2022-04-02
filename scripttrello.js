const colonne = document.getElementById('colo');
const toggle = document.getElementById('toggle');
const restaur = document.getElementById('restaur');
const aa = document.querySelector('.aa');

const form = document.querySelector('#form');
const supp = document.querySelector('.supp');
/* const ii = document.getElementById('ii');  */
const iii = document.getElementById('iii');
const corbeille = document.getElementById('corbeille')
const inputid = document.getElementById('inputid');
const inputidt = document.getElementById('inputidt');
const inputidtt = document.getElementById('inputidtt');
const textarea = document.getElementById('textarea');
const modala = document.getElementById('modala');
const regenair = document.querySelector('.regenair');
const droit = document.querySelector('#droit');
const col1 = document.createElement('div');
const mballo = document.getElementById('mballo');
const containeur = document.getElementById('containeur');
/* const container = document.getElementsByClassName('modal-container'); */
const not = document.getElementById('not');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const nav = document.querySelector('nav');
const alou = ['#EE0F58', '#F1E3A6', '#E02511', '#FFFFFF', '#EE0F58', '#6007A5'];
/* '#6007A5' */
/* function */
let i = 0;
var j = 0;
function creation() {
    const p = document.createElement('p');
    const tete = document.createElement('div');
    /* pour supprimer la colonne(col1) */
    const teteb = document.createElement('button')

    teteb.setAttribute('id', 'teteb')
    teteb.innerHTML = 'x'

    t = 0;

    teteb.addEventListener('click', (e) => {
        colonne.disabled = false;
        e.target.parentElement.parentElement.remove()
        compteur--;
    })

    const col1 = document.createElement('div');
    /* la je recupere regenair dans le js car je lai pas commenter dans le js contrairement a la clo1 */
    const regeneir = document.querySelector('.regenair');
    p.innerText = "colonne" + compteur;
    tete.setAttribute('class', 'tete');
    tete.append(p);
    /* je redonne a col1 sa class pour reprendre le meme css que j'ai mit pour sa classe que j'ai commenter avn de commanter j'ai bien mit sa classe avc un html et css jusqu'a avoir ce d'ont je voulait apres j'ai commenter donc si je le recrer dans le js je le donne la mm classe pour reprendre ses propriter */
    col1.setAttribute('class', 'col1');
    col1.setAttribute('id', + i);
    col1.style.background = alou[compteur]
    col1.style.backgroundImage = "url('alou.png')";
    /* pour centrer mon logo car avn il déborde une petite partie s'affiche */
    col1.style.backgroundPosition = "center";
    i++;
    tete.append(teteb)
    col1.append(tete);
    regeneir.appendChild(col1)
}

/* creation() */
let compteur = 1
colonne.addEventListener('click', () => {
    if (compteur <= 5) {
        creation()
        compteur++

    } else {
        colonne.disabled = true;
    }

})

/* pour cacher et faire reaparaitre le nav */
toggle.addEventListener('click', () => {
    nav.classList.toggle('show_nav')
})
/* toggle pour faire reaparaitre le modal */
not.addEventListener('click', () =>
    modal.classList.add('show-modal')
);

/* suppression de la modal avec le click plus */
close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})


/* pour que le input du mondal viens dans la colonne */
mballo.addEventListener('click', () => {
    validation()
    /* bloquer que la tache pars au niveau de la colonne si le text arrea es vide */
    if (textarea.value == '') {
        e.preventDefault()

    }
    const allColonne = document.querySelectorAll('.col1');
    taches(allColonne[0])
   
    
})
/* fonction pour les taches */
function taches(colonne) {
    const col11 = document.createElement('div');
    /* col11.setAttribute('class', 'coll_' + j) */
    const buttongauche = document.createElement('button')
    buttongauche.innerHTML = '<<';
    buttongauche.setAttribute('id', 'gauche');
    const iii = document.createElement('button');
    const rest = document.createElement("button");
    rest.innerHTML = "R"
    iii.setAttribute('id', 'iii');
    iii.innerHTML = 'x';
    /*  const iconee = document.createElement('i');
   iconee.setAttribute('class', 'fa fa-trash-o');  */
    /* pour deplacer le input dans l'autre colonne coter gauche */
    buttongauche.addEventListener('click', function (e) {
        e.target.parentElement.parentElement.previousSibling.appendChild(e.target.parentElement)

        buttondroit.style.visibility = "visible"
    })

    const input = document.createElement('input');
    /* pour recuperer le contenut du textarea au niveau du input */
    input.value = textarea.value 
   /*  let tabE = []
    if (input.value = '') {
        tabE.push('')
    }
    */
    const icone = document.createElement('i');
    icone.setAttribute('class', 'fa fa-trash-o');
    const buttondroit = document.createElement('button')

    buttondroit.innerHTML = '>>';
    buttondroit.setAttribute('id', 'droit');


    /* pour deplacer le input dans l'autre colonne coter gauche */
    buttondroit.addEventListener('click', function (e) {
        /* console.log(e.target.parentElement.parentElement)
        console.log(this.parentElement) */
        e.target.parentElement.parentElement.nextSibling.appendChild(e.target.parentElement)

        buttongauche.style.visibility = "visible"
        /* if (e.target.parentElement.parentElement.parentElement.nextSibling === null) {
             buttondroit. style.visibility="hidden" 
            }  */
    })

    input.style.backgroundColor = "transparent"
    j++
    col11.appendChild(buttongauche)
    col11.appendChild(input)
    col11.appendChild(buttondroit)
    col11.appendChild(iii)
    col11.appendChild(rest)
    /*  col11.appendChild(iconee) */
    col1.appendChild(col11)
    colonne.appendChild(col11)
    /* amener la teches supprimer au niveau de la corbeille */
    iii.addEventListener('click', function (e) {
        this.parentElement.setAttribute("pos", this.parentElement.parentElement.getAttribute("id"))
        supp.appendChild(this.parentElement)

    })
    /* amener la taches de la corbeille vers la colonne  */
    /* col1.setAttribute('pos', 'fa'); */
    rest.addEventListener('click', function (e) {
        document.getElementById(`${this.parentElement.getAttribute("pos")}`).appendChild(this.parentElement)
    })


    /* gauche vers la droite */

    /* function deplacerParagraphe(indice) {
    
            let col = document.querySelector('.coll_' + indice)
            console.log(col.parentElement.parentElement.id);
            let oldParent = col.parentElement.parentElement.id
            let nouvo = parseInt(oldParent) + 1
            console.log(nouvo);
            let newParent = document.getElementById(`${nouvo}`)
            newParent.appendChild(col)
            j++
    } */
    // droit.addEventListener('click',function () {
    //     this.parentElement.parentElement.nextSibling.appendChild(this.parentElement)
    //     gauche.style.visibility = "visible"
    //     if (this.parentElement.parentElement.nextSibling === null) {
    //         droit. style.visibility="hidden"
    //     } 
    // })

    /*  */

    /* suppression de la colonne */
    /* teteb.addEventListener('click', () => {
        col1.classList.remove('show-modal');
    })
     */

    /* pour faire reaparaitre le corbeille */
}
corbeille.onclick = () => {
    supp.classList.toggle('show_supp');

}
/* validation   des    champs */
/* function showError(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
} */

/* function checkRequired(inputArray) {
    
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    
} */
/* mballo.addEventListener('click', () => {
    for (let i = 0; i < form.length; i++) {
        
        console.log(document.form[i])
        checkRequired(document.form[i])
    }   
  
    
})
 */
/* validation D */
function validation() {
    const newD = moment();
    const dateSaissie = inputid.value
    if (moment(newD).isAfter(dateSaissie,'day')) {
        aa.className = 'vis';
        e.preventDefault()
        
    } else {
        
    }
}
